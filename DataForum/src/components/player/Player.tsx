import style from './player.module.css';
import video from '../../assets/video/df_showreel_blue_25 (1080p).mp4';

const Player = () => {
  return (
    <div className={style.player}>
      <div>
        <h2 className={style.title}>Зал амур</h2>
      </div>

      <div className={style.videoContainer}>
        <video
          className={style.video}
          title="vimeo-player"
          controls
          muted
          src={video}
        ></video>
      </div>
    </div>
  );
};

export default Player;
