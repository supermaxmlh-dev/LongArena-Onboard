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
      "toast_copied": "Copied",
      "q1_text": "If work is a battle, shouldn't training be a realistic game?",
      "q1_btn": "Enter the Battlefield",
      "q2_text": "Will AI arm every individual with a 'nuclear arsenal'?",
      "q2_btn": "Equip Me",
      "q3_text": "Should expert intuition be encoded into an eternal engine?",
      "q3_btn": "Preserve It",
      "q4_text": "Will future leaders command AI armies?",
      "q4_btn": "Take Command",
      "q5_text": "Are you ready to join the arena?",
      "q5_btn": "Open the Gate",
      "secret_base_welcome": "Welcome to Long Arena",
      "btn_find_us": "Find Us",
      "tab_public": "Public Transport",
      "tab_taxi": "Taxi",
      "tab_drive": "Self-driving",
      "public_guide": "Metro Line X, Exit Y",
      "taxi_guide": "Search for Long Arena, Drop-off at Lobby",
      "drive_guide": "Navigate to Parking Entrance B",
      "video_title_1": "Vision",
      "video_title_2": "Product Demo",
      "video_title_3": "Case Study",
      "video_salesnail_title": "SalesNail: Product Intro"
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
      "toast_copied": "已复制",
      "q1_text": "如果商业是一场残酷的战争，为什么我们的训练还停留在纸上谈兵？",
      "q1_btn": "进入战场 / Enter Battlefield",
      "q2_text": "AI不应是替代者，而是外骨骼。",
      "q2_btn": "全副武装 / Equip Me",
      "q3_text": "真正的行业智慧应该被提取、编码，变成永不磨损的代码",
      "q3_btn": "传承智慧 / Preserve It",
      "q4_text": "未来的Top Sales，是否将不再是背书机器，而是指挥AI军团的指挥官？",
      "q4_btn": "接管指挥权 / Take Command",
      "q5_text": "你是否也在寻找这群志同道合的人，去打破旧世界的规则？",
      "q5_btn": "开启大门 / Open the Gate",
      "secret_base_welcome": "欢迎来到龙之竞技场",
      "btn_find_us": "📍 线下·秘密基地指引 (Find Us)",
      "tab_public": "公共交通",
      "tab_taxi": "打车",
      "tab_drive": "自驾",
      "public_guide": "地铁X号线 12号口直达",
      "taxi_guide": "定位至“雅居乐国际广场”",
      "drive_guide": "导航至“雅居乐国际广场-地下停车场”",
      "video_title_1": "公司愿景",
      "video_title_2": "产品演示",
      "video_title_3": "案例研究",
      "video_salesnail_title": "SalesNail: 产品简介 / Product Intro"
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
