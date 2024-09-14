import style from './chat.module.css';
import info from '../../assets/images/info-icon.svg';
import question from '../../assets/images/question.svg';
import smile from '../../assets/images/smile.svg';
import send from '../../assets/images/send-icon.svg';

const Chat = () => {
  return (
    <div className={style.chat}>
      <div className={style.title}>
        <h2>Live chat</h2>
        <img src={info} alt="info icon" />
      </div>

      <div className={style.messages}>
        <div className={style.message}>
          <h3>Иван Зурабьев</h3>
          <p>Спасибо Анне Анатольевне за очень интересный доклад!</p>
        </div>
        <div className={style.message}>
          <h3>Екатерина Овсянина</h3>
          <p>Подскажите когда секция про Остеопороз у мужчин?</p>
        </div>
        <div className={style.messageLast}>
          <div className={style.messageLastSpan}>
            <span></span>
          </div>
          <div className={style.messageLastText}>
            <h3>Екатерина Овсянина</h3>
            <p>
              Вопрос спикеру:
              <br />
              Факторы риска переломов бедра у мужчин?
            </p>
          </div>
        </div>
      </div>

      <div className={style.input}>
        <div className={style.type}>
          <img src={question} alt="question-icon" />
          <p>Введите сообщение</p>
        </div>
        <div className={style.send}>
          <img src={smile} alt="smile-icon" />
          <img src={send} alt="send-icon" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
