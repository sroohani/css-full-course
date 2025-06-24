import classes from "./Source.module.css";

const Source = () => {
  const title = "Source: 'Future Fullstack' YouTube Channel";

  return (
    <a href="https://www.youtube.com/watch?v=-G-zic_LS0A" target="_blank">
      <img
        className={classes.source}
        src="https://yt3.ggpht.com/c7ZeILnHyfXX5qypjm9vPq4m1aU-C8ZayeAwNLLNFGZ_1WQ8x7xajaoNQgt_49l1PJ6SJPtExw=s48-c-k-c0x00ffffff-no-rj"
        alt={title}
        title={title}
      />
    </a>
  );
};

export default Source;
