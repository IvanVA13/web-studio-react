import React from 'react';
import styles from './OrderList.module.scss';

const orders = [
  {
    id: '1',
    date: '25.10.2021',
    comment: 'We need some site',
    status: 'cancel',
  },
  {
    id: '2',
    date: '25.11.2021',
    comment: 'Hello. Our company need web store',
    status: 'done',
  },
  {
    id: '3',
    date: '25.12.2021',

    comment: 'I need cheep and powerful website!!! And very fast!!!',
    status: 'new',
  },
];

export const OrderList = () => {
  const handleClick = e => console.log(e.currentTarget.id);
  return (
    <div className={`container ${styles['order-container']}`}>
      <h2 className={styles['order-title']}>Заказы</h2>
      <ul className={styles['order-list']}>
        {orders.map(({ id, date, comment, status }, i) => (
          <li className={styles['order-item']} key={i}>
            <p className={styles['order-date']}>{date}</p>
            <p className={styles['order-comment']}>{comment}</p>
            <p
              className={`${styles['order-status']} ${
                styles[`order-status-${status}`]
              }`}
            >
              {status}
            </p>
            <button
              className={styles['order-btn']}
              type="button"
              id={id}
              disabled={status === 'new' ? false : true}
              onClick={handleClick}
            >
              Отменить заказ
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
