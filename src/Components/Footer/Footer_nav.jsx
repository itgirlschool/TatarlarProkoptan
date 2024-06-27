import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import styles from "./Footer_nav.module.scss";

const items = [
  {
    key: "1",
    label: "О нас",
  },
  {
    key: "2",
    label: "Мероприятия",
  },
  {
    key: "3",
    label: "Культура",
  },
  {
    key: "4",
    label: "Наши партнеры",
  },
  {
    key: "5",
    label: "Сабантуй",
  },
  {
    key: "6",
    label: "Благотворительность",
  },
  {
    key: "7",
    label: "Мы вместе",
  },
];

const FooterNav = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
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
        <Menu mode="inline" inlineCollapsed={collapsed} items={items} />
      </div>
    </div>
  );
};

export default FooterNav;
