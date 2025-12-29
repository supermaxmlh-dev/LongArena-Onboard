import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
const resources = {
  en: {
    translation: {
      "title": "Welcome to Long Arena",
      "switch_language": "中 / En",
      "nav_home": "Home",
      "nav_about": "About Us",
      "nav_industry": "Industry Info",
      "nav_products": "Products",
      "hello": "Hello, Welcome to Long Arena",
      "welcome_sub": "Wishing you a wonderful day here",
      "card_transport": "Transport Guide",
      "address_label": "Company Address",
      "address_value": "Shanghai Agile International Plaza",
      "btn_copy_address": "Copy Address",
      "btn_open_map": "Open Map",
      "card_wifi": "Wi-Fi Connection",
      "wifi_ssid_label": "Network Name",
      "wifi_pass_label": "Password",
      "btn_copy_pass": "Copy Password",
      "card_contact": "Contact Us",
      "btn_call": "Call Now",
      "btn_copy_wechat": "Copy WeChat",
      "toast_copied": "Copied"
    }
  },
  zh: {
    translation: {
      "title": "欢迎来到龙之竞技场的秘密基地",
      "switch_language": "中 / En",
      "nav_home": "首页",
      "nav_about": "关于我们",
      "nav_industry": "行业知识",
      "nav_products": "产品中心",
      "hello": "Hello, 欢迎来到 Long Arena",
      "welcome_sub": "愿您在这里度过美好的一天",
      "card_transport": "交通指引",
      "address_label": "公司地址",
      "address_value": "上海市雅居乐国际广场",
      "btn_copy_address": "复制地址",
      "btn_open_map": "打开地图",
      "card_wifi": "Wi-Fi 连接",
      "wifi_ssid_label": "网络名称",
      "wifi_pass_label": "密码",
      "btn_copy_pass": "复制密码",
      "card_contact": "联系我们",
      "btn_call": "拨打电话",
      "btn_copy_wechat": "复制微信号",
      "toast_copied": "已复制"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "zh", // Default language
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
