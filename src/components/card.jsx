import styles from "../styles/Quemsomos.module.css";
import React from 'react';

const Card = ({ number, imagem="" }) => <div className="card">{<img src={imagem} style={{ borderRadius:"0.5rem", boxShadow:"0px 2px 2.5px 1px rgba(0, 0, 0, 0.6)"}} alt="Guilherme Foto" />}</div>

export default Card;