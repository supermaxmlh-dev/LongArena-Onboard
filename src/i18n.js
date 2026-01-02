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
      "q1_main": "Don't pay for failure with real capital.",
      "q1_sub": "Before crossing the stormy river, why not drown and be reborn 100 times in our 'Virtual Pool'?",
      "q1_btn": "Start Simulation",
      
      "q2_main": "Admit it. Biological intelligence has hit its ceiling.",
      "q2_sub": "But with an AI Exoskeleton, you become infinite. Give every employee the firepower of an expert instantly.",
      "q2_btn": "Equip AI",
      
      "q3_main": "The greatest waste is wisdom walking out the door.",
      "q3_sub": "We extract, encode, and seal it. Flesh ages, but corporate wisdom should be immortal.",
      "q3_btn": "Digitize Wisdom",
      
      "q4_main": "Top sales is no longer about talk. It's about strategy.",
      "q4_sub": "Don't be a script-reciting robot. Be the strategist commanding an army of AI Agents.",
      "q4_btn": "Take Command",
      
      "q5_main": "We don't predict the future. We simulate it.",
      "q5_sub": "Are you also looking for the tribe that dares to break the old world's rules?",
      "q5_btn": "Enter Arena",

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
      "q1_main": "不要用真金白银，去买一次失败的教训。",
      "q1_sub": "在横渡长江之前，为什么不先在我们的“虚拟游泳池”里，经历 100 次溺水与重生？",
      "q1_btn": "开始模拟 / Start Simulation",
      
      "q2_main": "承认吧，人类的脑力已经到达了生物极限。",
      "q2_sub": "但加上 AI 外骨骼，你就是无限。让每一个普通员工，瞬间拥有专家的火力。",
      "q2_btn": "装备外骨骼 / Equip AI",
      
      "q3_main": "企业最大的浪费，是经验随着离职单一起被带走。",
      "q3_sub": "我们将智慧提取、编码、封装。肉体凡胎会老去，但企业的智慧应当永生。",
      "q3_btn": "固化智慧 / Digitize Wisdom",
      
      "q4_main": "顶级销售，从来不只靠嘴皮子，而靠脑子。",
      "q4_sub": "不需要背话术的复读机，做那个指挥千军万马 AI Agent 的战略家。",
      "q4_btn": "接管战场 / Take Command",
      
      "q5_main": "我们不预测未来，我们演绎未来。",
      "q5_sub": "你是否也在寻找这群志同道合的人，去打破旧世界的规则？",
      "q5_btn": "开启新世界 / Enter Arena",

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
