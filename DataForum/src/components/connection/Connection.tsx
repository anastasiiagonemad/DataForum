import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './connection.module.css';
import avatar from '../../assets/images/avatar.png';
import play from '../../assets/images/play.svg';

interface RoomDataItem {
  title: string;
  subtitle: string;
  text: string;
}

interface RoomData {
  id: number;
  is_active: boolean;
  item: RoomDataItem;
  room_id: string;
  timerange: string[];
}

//В заметках подключение к socket.io. В консоли считываются ошибки, поэтому код оставила закомментированным.

const Connection: React.FC = () => {
  const [roomData, setRoomData] = useState<RoomData[] | []>([]);
  //   const [roomStatus, setRoomStatus] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const itemsOnPage = 3;

  //   const socket = io('https://test.wpdataforum.ru');

  const fetchData = async () => {
    try {
      const res = await axios.get(
        'https://test.wpdataforum.ru/events/AAAAA11/rooms/avrora',
      );
      const schedule = res.data.schedule;
      setRoomData(schedule);

      //   const { start_timestamp, elapsed_time, is_running, is_ended } = res.data;
      //   if (!is_running && !is_ended && elapsed_time === 0) {
      //     setRoomStatus('Скоро начнется');
      //   } else if (is_running) {
      //     setRoomStatus('Трансляция идет');
      //   } else if (!is_running && !is_ended && elapsed_time > 0) {
      //     setRoomStatus('Трансляция приостановлена');
      //   } else if (is_ended) {
      //     setRoomStatus('Трансляция завершена');
      //   }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    // socket.on('connect', () => {
    //     socket.emit('room', { room_event: 'avrora' });
    //   });

    //   socket.on('join', (data: any) => {
    //     console.log('Successfully joined room:', data);
    //   });

    //   socket.on('current-event', (data: { id: number }) => {
    //     setActiveScheduleId(data.id);
    //   });

    //   socket.on('room-status', (data: string) => {
    //     if (data === 'start') {
    //       setRoomStatus('Трансляция идет');
    //     } else if (data === 'pause') {
    //       setRoomStatus('Трансляция приостановлена');
    //     } else if (data === 'stop') {
    //       setRoomStatus('Трансляция остановлена');
    //     }

    // return () => {
    //     socket.disconnect();
    //   };
  }, []);

  const nextPage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(roomData.length / itemsOnPage),
    );
  };
  const prevPage = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return Math.ceil(roomData.length / itemsOnPage) - 1;
      }
      return prevIndex - 1;
    });
  };

  const getCurrentItems = () => {
    const start = currentIndex * itemsOnPage;
    return roomData.slice(start, start + itemsOnPage);
  };

  return (
    <>
      {roomData.length > 0 ? (
        <div className={style.connection}>
          <div className={style.activeTitle}>
            <span></span>
            {roomData.map((item) => (
              <h2 className={item.is_active ? style.active : style.nonactive}>
                {item.is_active === true
                  ? `Активная сессия: ${item.item.title}`
                  : ``}
              </h2>
            ))}
          </div>

          <div className={style.dataListItems}>
            {getCurrentItems().map((item) => (
              <div key={item.id} className={style.dataList}>
                <div className={style.dataListTitle}>
                  <div className={style.dataListImage}>
                    <img src={avatar} alt="photo" />
                  </div>
                  <div className={style.dataListText}>
                    <h3
                      className={
                        item.is_active === true
                          ? style.active
                          : style.textColorWhite
                      }
                    >
                      {item.item.title}
                    </h3>
                    <p className={style.textColorWhite}>{item.item.subtitle}</p>
                    <p className={style.textColorWhite}>{item.item.text}</p>
                  </div>
                </div>
                <div className={style.dataListTimerange}>
                  <p
                    className={
                      item.is_active ? style.activeTime : style.nonActiveTime
                    }
                  >
                    {item.timerange
                      .map((time) => time.split(':').slice(0, 2).join(':'))
                      .join(' - ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={style.sliderElement}>
            <button className={style.prevSlide} onClick={prevPage}>
              <img src={play} alt="icon" />
            </button>
            <button className={style.nextSlide} onClick={nextPage}>
              <img src={play} alt="icon" />
            </button>
          </div>
        </div>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </>
  );
};

export default Connection;
