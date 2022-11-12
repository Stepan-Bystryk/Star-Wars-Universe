import cn from "classnames";

import styles from "./UiVideo.module.css";

const UiVideo = ({ src, classes }: { src: string; classes: string }) => {
  return (
    <video loop autoPlay muted className={cn(styles.video, classes)}>
      <source src={src} />
    </video>
  );
};

export default UiVideo;
