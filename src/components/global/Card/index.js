import styles from './styles.module.scss';
const Card = ({member}) => {
  const handleClick = () => {
    const url = `https://twitter.com/${member.handle}`;
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Opening link to ${url}`)) {
      console.log('opening!');
      window.open(url);
    } else {
      console.log('Cancelled');
    }
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div
        className={styles.imageContainer}
        style={{backgroundImage: `url(${member.image})`}}
      >
        <div className={styles.overlay} />
        <div className={styles.artistInfoContainer}>
          <div className={styles.pfpContainer}>
            <div
              className={styles.pfp}
              style={{backgroundImage: `url(${member.icon})`}}
            />
          </div>
          <div className={styles.alias}>
            {member.alias}
          </div>
          <div className={styles.handle}>
            twitter@{member.handle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
