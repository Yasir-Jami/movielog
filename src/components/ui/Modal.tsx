import styles from "@styles/Modal.module.css";
import React, { useEffect, useRef } from "react";
import { ModalProps } from "types";

function Modal({header, modalModules, modalOpen, setModalOpen}: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  let content: React.JSX.Element = <></>;

  const ModalModules = () => {
    let modulesContent: React.JSX.Element[] = [];

    modalModules.map((module, i) => {
      console.log(module.moduleType, styles);
      let moduleElement = <></>;
      switch (module.moduleType) {
        case "modal-textbox":
          moduleElement = <input type="text" id={`${i}`} className={styles[module.moduleType]}></input>;
          break;
        case "modal-dropdown":
          moduleElement = 
          <select className={styles[module.moduleType]}>
            <option value="option1">Option 1 Text</option>
            <option value="option2">Option 2 Text</option>
            <option value="option3">Option 3 Text</option>
          </select>;
          break;
        case "modal-counter":
          moduleElement = <input type="number" min="0" max="10" className={styles[module.moduleType]}></input>;
          break;
        case "modal-date":
          moduleElement = <input type="date" className={styles[module.moduleType]}></input>;
          break;
        case "modal-button":
          moduleElement = <button className={styles[module.moduleType]}>{module.elementLabel}</button>;
          break;
        case "modal-aside":
          moduleElement = <div className={styles[module.moduleType]}></div>;
          break;
        case "modal-special":
          moduleElement = <div className={styles[module.moduleType]}></div>;
          break;
        default:
          logger.log("Unknown module type for", module.label);
      }

      modulesContent.push(
        <div className={`${styles["modal-module"]}`} key={i}>
          <p className={styles["modal-label"]}>{module.label}</p>
          {moduleElement}
        </div>
      );
    });

    console.log(modulesContent);
    return <>{modulesContent}</>;
  }

  if (modalOpen) {
    content = (
      <>
      <div className={styles.modal}/>
      <div className={styles["modal-container"]} ref={modalRef}>
        <p className={styles["modal-header"]}>{header}</p>
        <div className={styles["modal-content"]} ref={modalRef}>
          <ModalModules></ModalModules>
        </div>
      </div>
      </>
    )
  }

  useEffect(() => {
    function handleClickOutsideModal(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutsideModal);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModal);
    }
  }, []);

  return (
    <>
    {content}
    </>
  )
}


export default Modal;