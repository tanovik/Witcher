import "./PolicyModal.css";
import React, { useEffect } from "react";
import closeButton from "../../../assets/images/Close.png";

export default function PolicyModal() {
  const [isModal, setModal] = React.useState(false);
  const onClose = () => setModal(false);
  return (
    <>
      <div className="modal_button_wrapper">
        <button onClick={() => setModal(true)} className="modal_button">
          Политика обработки персональных данных
        </button>
      </div>
      <Modal visible={isModal} onClose={onClose} />
    </>
  );
}
const Modal = ({ visible = false, onClose }) => {
  const onKeydown = ({ key }) => {
    return key === "Escape" ? onClose() : null;
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });
  if (!visible) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal_dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal_wrapper">
          <div className="modal_header">
            <h2 className="modal_title">Обработка данных</h2>
            <span className="modal_close" onClick={onClose}>
              <img src={closeButton} alt={"close button"} />
            </span>
          </div>
          <div className="modal_body">
            <div className="modal_content">
              <p className="modal_content_title">
                1. Что регулирует настоящая политика конфиденциальности
              </p>
              <p>
                Настоящая политика конфиденциальности (далее — Политика)
                действует в отношении всей информации, включая персональные
                данные в понимании применимого законодательства (далее —
                «Персональная информация»), которую ООО «Гросс маркет» и/или его
                аффилированные лица, в том числе входящие в одну группу с ООО
                «Гросс маркет» (далее — «Гросс маркет»), могут получитьо Вас в
                процессе использования Вами любых сайтов, программ, продуктов
                и/или сервисов Гросс маркет (далее вместе «Сервисы»), информацию
                о которых Гросс маркет может также получать Персональную
                информацию от своих партнеров (далее — «Партнеры»), сайты,
                программы, продукты или сервисы которых Вы используете
                (например, от рекламодателей Гросс маркет или службами такси). В
                таких случаях передача Персональной информации возможна только в
                случаях, установленных применимым законодательством, и
                осуществляется на основании специальных договоров между Гросс
                маркет и каждым из Партнеров.
              </p>
              <p>
                Пожалуйста, обратите внимание, что использование любого из
                Сайтов и/или Сервисов может регулироваться дополнительными
                условиями, которые могут вносить в настоящую Политику изменения
                и/или дополнения, и/или иметь специальные условия в отношении
                персональной информации, размещенные в соответствующих разделах
                документов для таких Сайтов /или Сервисов.
              </p>
              <p className="modal_content_title">
                2. Кто обрабатывает информацию
              </p>
              <p>
                Для обеспечения использования Вами Сайтов и Сервисов Ваша
                Персональная информация собирается и используется Яндексом, в
                том числе включая общество с ограниченной ответственностью
                «Гросс маркет», юридическое лицо, созданное по законодательству
                Российской Федерации и зарегистрированное по адресу: 123351,
                Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или
                его аффилированным лицом, предоставляющим соответствующий Сервис
                в иных юрисдикциях. С информацией о том, какое лицо
                предоставляет тот или иной Сервис, Вы можете ознакомиться в
                условиях использования соответствующего Сервиса.
              </p>
              <p className="modal_content_title">
                3. Какова цель данной Политики
              </p>
              <p>
                Защита Вашей Персональной информации и Вашей конфиденциальности
                чрезвычайно важны для Гросс маркета. Поэтому при использовании
                Вами Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу
                Персональную информацию в строгом соответствии с применимым
                законодательством.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
