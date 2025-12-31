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
      
      // Soul Questions
      "q1_main": "Would you learn to swim without a pool?",
      "q1_sub": "If business is a life-or-death battle, why is our training still just waving hands on the shore?",
      "q1_btn": "Dive In",
      
      "q2_main": "Bare hands vs. Full Armor?",
      "q2_sub": "AI should not replace humans, but be your exoskeleton. Let everyone possess the firepower of an army.",
      "q2_btn": "Suit Up",
      
      "q3_main": "When a master leaves, must their wisdom vanish?",
      "q3_sub": "True industry wisdom should not be legend, but extracted, encoded, and become digital assets that never wear out.",
      "q3_btn": "Preserve It",
      
      "q4_main": "Future Sales: Repeater or Commander?",
      "q4_sub": "Say goodbye to rote memorization. The strong of the future are strategists commanding legions of AI Agents.",
      "q4_btn": "Take Command",
      
      "q5_main": "We don't predict the future. We rehearse it.",
      "q5_sub": "If you believe in this too, welcome to Long Arena. Here are the kindred spirits you seek.",
      "q5_btn": "Open Base",

      // Secret Base
      "secret_base_welcome": "Welcome to Long Arena",
      "btn_find_us": "Find Us",
      "tab_public": "Public Transport",
      "tab_taxi": "Taxi",
      "tab_drive": "Self-driving",
      "public_guide": "Take Metro Line 1/2/8 to [People's Square Station], Exit 19. Walk 200m to Agile International Plaza.",
      "taxi_guide": "Destination: Agile International Plaza, Xizang Middle Road, Huangpu District, Shanghai.",
      "drive_guide": "Underground parking entrance at [Changsha Road]. Parking fee: 15 RMB/hour.",
      
      // Videos
      "video_salesnail_title": "SalesNail: Combat Training",
      "video_casestudy_title": "SalesNail: Customer Case",
      "video_trainer_title": "SalesNail: Creator Journey"
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
      
      // Soul Questions
      "q1_main": "你见过没有游泳池的游泳课吗？",
      "q1_sub": "如果商业是一场生死之战，为什么我们的训练还停留在岸上比划？",
      "q1_btn": "跳入泳池",
      
      "q2_main": "赤手空拳，如何赢过全副武装？",
      "q2_sub": "AI不应取代人类，而是你的外骨骼。让每个人都拥有一支军队的火力。",
      "q2_btn": "全副武装",
      
      "q3_main": "当销冠离职，他的智慧只能随风消散吗？",
      "q3_sub": "真正的行业心法不该是传说，而应被提取、编码，成为永不磨损的数字资产。",
      "q3_btn": "永久封存",
      
      "q4_main": "未来的销售：是复读机，还是指挥官？",
      "q4_sub": "告别死记硬背。未来的强者，是指挥 AI Agent 军团运筹帷幄的战略家。",
      "q4_btn": "接管指挥权",
      
      "q5_main": "我们不预测未来，我们彩排未来。",
      "q5_sub": "如果你也相信这一切，欢迎来到龙之竞技场。这里有你寻找的同类。",
      "q5_btn": "开启基地",

      // Secret Base
      "secret_base_welcome": "欢迎来到龙之竞技场",
      "btn_find_us": "线下·秘密基地指引",
      "tab_public": "公共交通",
      "tab_taxi": "打车",
      "tab_drive": "自驾",
      "public_guide": "地铁1号线/2号线/8号线 [人民广场站] 下车，19号口出，步行200米即达雅居乐国际广场。",
      "taxi_guide": "定位至：上海市黄浦区西藏中路 雅居乐国际广场 (Agile International Plaza)。",
      "drive_guide": "地下停车场入口位于[长沙路]，停车费 15元/小时。",
      
      // Videos
      "video_salesnail_title": "SalesNail: 战训一体",
      "video_casestudy_title": "SalesNail: 客户案例",
      "video_trainer_title": "SalesNail: 创作者历程"
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
