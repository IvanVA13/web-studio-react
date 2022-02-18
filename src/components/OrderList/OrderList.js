import React from 'react';

import styles from './OrderList.module.scss';
import Container from '../Wrappers/Container';
import { useSelector } from 'react-redux';
import {
  fetchOrders,
  getAllOrders,
  updateOrderStatus,
} from '../../redux/orders';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const OrderList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const orders = useSelector(getAllOrders);
  const handleClick = e => {
    dispatch(updateOrderStatus(e.currentTarget.id));
  };
  return (
    <Container type="order">
      <h2 className={styles['order-title']}>Заказы</h2>
      <ul className={styles['order-list']}>
        <li
          className={`${styles['order-item']} ${styles['order-item-header']}`}
          key="header of order list"
        >
          <p className={styles['order-date']}>Дата заказа</p>
          <div
            className={`${styles['order-desc']} ${styles['order-desc-header']}`}
          >
            <p className={`${styles['order-type']}`}>Услуга</p>
            <p
              className={`${styles['order-comment']} ${styles['order-comment-header']}`}
            >
              Комментарий к заказу
            </p>
          </div>
          <p
            className={`${styles['order-status']} ${styles['order-status-header']}`}
          >
            Статус заказа
          </p>
        </li>
        {orders.map(({ _id, productType, createdAt, comment, status, btn }) => {
          const date = new Date(createdAt);
          const newDate = `${createdAt ? date.toLocaleString() : ''}`;
          const newType = productType
            ? `${productType[0].toUpperCase()}${productType.slice(1)}`
            : '';

          return (
            <li className={styles['order-item']} key={_id}>
              <p className={styles['order-date']}>{newDate}</p>
              <div className={`${styles['order-desc']}`}>
                <p className={`${styles['order-type']}`}>{newType}</p>
                <p className={`${styles['order-comment']}`}>{comment}</p>
              </div>
              <p
                className={`${styles['order-status']} ${
                  styles[`order-status-${status}`]
                }`}
              >
                {status}
              </p>
              {!btn && (
                <button
                  className={`${styles.button} ${styles['order-btn']}`}
                  type="button"
                  id={_id}
                  disabled={status === 'new' ? false : true}
                  onClick={handleClick}
                >
                  Отменить заказ
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
