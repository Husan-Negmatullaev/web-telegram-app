import { useParams } from "react-router-dom";
import { getDigFormat } from "../../helpers/functions";
import { ButtonTelLink } from "../common/Button";
import axios from "../../services/axios"

import styles from "./ChannelPriceActions.module.scss";

const tg = window.Telegram.WebApp;

const ChannelPriceActions = ({ price, contactNetwork, contactSales }) => {
  const isLinks = Boolean(contactNetwork && contactSales);
  const findLink = contactNetwork || contactSales;
  const { channelId } = useParams();
  const { openTelegramLink } = window.Telegram.WebApp;

  const handleButtonClick = async (url) => {
    const user_id = tg.initDataUnsafe?.user?.id || "503118393";
    openTelegramLink(contactNetwork);

    try {
      await axios.get(`http://aviatatravel.com/contact/${url}/`, {
        params: {
          user_id,
          channel_id: channelId,
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  const TelegramLinks = () => {
    return <>
      <ButtonTelLink
        link={contactNetwork}
        classes={styles.channelActions__button}
        onClick={() => handleButtonClick("contact")}
      >
        <span>Связаться</span>
      </ButtonTelLink>
      <ButtonTelLink link={contactSales} classes={styles.channelActions__button}>
        <span>Поторговаться</span>
      </ButtonTelLink>
    </>
  }

  return (
    <div className={styles.channel}>
      <div className={styles.channelPrice}>
        <div className={styles.channelPrice__content}>
          <h2 className={styles.channelPrice__title}>Стоимость</h2>
          <p className={styles.channelPrice__text}>за один рекламный пост</p>
        </div>
        <div className={styles.channelPrice__price}>
          <span>{getDigFormat(price)} руб.</span>
        </div>
      </div>
      <div className={styles.channelActions}>
        <div className={styles.channelActions__body}>
          {
            isLinks ?
              <TelegramLinks />
              :
              <ButtonTelLink link={findLink} classes={styles.channelActions__button}>
                <span>Связаться с менеджмером</span>
              </ButtonTelLink>
          }
        </div>
      </div>
    </div>
  )
}

export default ChannelPriceActions;