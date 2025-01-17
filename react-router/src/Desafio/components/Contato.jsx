import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.png';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>vpena.dev@gmail.com</li>
          <li>99 99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
