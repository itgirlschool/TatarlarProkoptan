import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Link } from "react-router-dom";
import styles from "./Footer_nav.module.scss";

const items = [
  {
    key: "1",
    label: <Link to="/about-us">О нас</Link>,
  },
  {
    key: "2",
    label: <Link to="/events">Мероприятия</Link>,
  },
  {
    key: "3",
    label: <Link to="/culture">Культура</Link>,
  },
  {
    key: "4",
    label: <Link to="/partners">Наши партнеры</Link>,
  },
  {
    key: "5",
    label: <Link to="/sabantui">Сабантуй</Link>,
  },
  {
    key: "6",
    label: <Link to="/charity">Благотворительность</Link>,
  },
  {
    key: "7",
    label: <Link to="/we-are-together">Мы вместе</Link>,
  },
];

const FooterNav = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = () => {
    setCollapsed(true);
  };

  return (
    <div className={styles.nav}>
      <Button
        type="custom"
        onClick={toggleCollapsed}
        className={styles.nav__button}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <div
        className={`${styles.nav__menu} ${
          !collapsed ? styles.nav__menu_visible : ""
        }`}
      >
        <Menu
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
          onClick={handleMenuClick}
        />
      </div>
    </div>
  );
};

export default FooterNav;
