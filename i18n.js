/* ===== NEXT SEO24 shared i18n engine (EN · 中文 · 日本語 · ไทย · 한국어) =====
   Per-page content lives in window.PAGE_I18N (set inline before this script).
   Common UI strings (nav, byline, FAQ, footer…) live in COMMON below.
   English is the source in the HTML; switching swaps innerHTML by data-i18n key.
   Language choice is remembered across pages via localStorage. */
(function () {
  var COMMON = {
    zh: {
      nav_home:"首页", nav_services:"服务", nav_markets:"市场", nav_whyus:"为何选择我们",
      nav_results:"成果", nav_contact:"联系", nav_cta:"免费SEO诊断", nav_mag:"杂志", nav_price:"价格", art_hc:"2026 谷歌有用内容系统解析", art_wb:"白帽外链：什么仍能提升排名", art_cw:"核心网页指标与INP：速度清单", art_nv:"Naver 与 Google：赢得韩国搜索", art_se:"进入东南亚：本地化指南", art_sg:"在线体育游戏App营销",
      svc_seo:"谷歌SEO排名", svc_back:"外链建设", svc_web:"网站开发", svc_content:"内容与文案",
      svc_sns:"社交媒体营销", svc_video:"视频制作",
      mkt_kr:"韩国市场", mkt_jp:"日本市场", mkt_sea:"东南亚",
      by_team:"NEXT SEO24 团队", by_loc:"吉隆坡", by_updated:"最后更新 2026年6月3日",
      by_about:"了解我们的团队", bc_home:"首页", faq_h:"常见问题",
      rel_k:"了解更多", rel_home:"返回 NEXT SEO24 首页", cta_btn:"通过 WhatsApp 联系 →",
      foot_made:"产自吉隆坡 · 服务全球",
      foot_about:"吉隆坡的SEO与外链机构。我们让您的网站登上谷歌首页——覆盖韩国、日本与东南亚。", foot_svc:"服务", foot_markets:"市场", foot_company:"公司", foot_rights:"版权所有。", foot_privacy:"隐私政策", foot_terms:"条款", nav_cases:"案例研究"
    },
    ja: {
      nav_home:"ホーム", nav_services:"サービス", nav_markets:"市場", nav_whyus:"選ばれる理由",
      nav_results:"実績", nav_contact:"お問い合わせ", nav_cta:"無料SEO診断", nav_mag:"マガジン", nav_price:"料金", art_hc:"2026年 Googleの有用なコンテンツ システム", art_wb:"ホワイトハット被リンク：今も効くもの", art_cw:"Core Web VitalsとINP：速度チェックリスト", art_nv:"Naver対Google：韓国検索で勝つ", art_se:"東南アジア進出：ローカライズの手引き", art_sg:"オンラインスポーツゲームアプリのマーケティング",
      svc_seo:"Google SEO 順位", svc_back:"被リンク構築", svc_web:"ウェブサイト制作", svc_content:"コンテンツ＆ライティング",
      svc_sns:"SNSマーケティング", svc_video:"動画制作",
      mkt_kr:"韓国市場", mkt_jp:"日本市場", mkt_sea:"東南アジア",
      by_team:"NEXT SEO24 チーム", by_loc:"クアラルンプール", by_updated:"最終更新 2026年6月3日",
      by_about:"私たちのチームについて", bc_home:"ホーム", faq_h:"よくある質問",
      rel_k:"もっと見る", rel_home:"NEXT SEO24 ホームへ戻る", cta_btn:"WhatsApp で相談 →",
      foot_made:"クアラルンプール発 · 世界へ",
      foot_about:"クアラルンプールのSEO＆被リンク エージェンシー。あなたのサイトをGoogleの1ページ目へ — 韓国・日本・東南アジアで。", foot_svc:"サービス", foot_markets:"市場", foot_company:"会社", foot_rights:"無断転載を禁じます。", foot_privacy:"プライバシー", foot_terms:"利用規約", nav_cases:"導入事例"
    },
    th: {
      nav_home:"หน้าแรก", nav_services:"บริการ", nav_markets:"ตลาด", nav_whyus:"ทำไมต้องเรา",
      nav_results:"ผลลัพธ์", nav_contact:"ติดต่อ", nav_cta:"ตรวจ SEO ฟรี", nav_mag:"นิตยสาร", nav_price:"ราคา", art_hc:"ระบบ Helpful Content ของ Google ปี 2026", art_wb:"แบ็กลิงก์สายขาว: อะไรที่ยังดันอันดับ", art_cw:"Core Web Vitals และ INP: เช็กลิสต์ความเร็ว", art_nv:"Naver กับ Google: ชนะการค้นหาในเกาหลี", art_se:"บุกเอเชียตะวันออกเฉียงใต้: คู่มือโลคัลไลซ์", art_sg:"การตลาดแอปเกมกีฬาออนไลน์",
      svc_seo:"จัดอันดับ SEO บน Google", svc_back:"สร้างลิงก์ย้อนกลับ", svc_web:"พัฒนาเว็บไซต์", svc_content:"เนื้อหาและการเขียน",
      svc_sns:"การตลาดโซเชียลมีเดีย", svc_video:"ผลิตวิดีโอ",
      mkt_kr:"ตลาดเกาหลี", mkt_jp:"ตลาดญี่ปุ่น", mkt_sea:"เอเชียตะวันออกเฉียงใต้",
      by_team:"ทีม NEXT SEO24", by_loc:"กัวลาลัมเปอร์", by_updated:"อัปเดตล่าสุด 3 มิถุนายน 2026",
      by_about:"เกี่ยวกับทีมของเรา", bc_home:"หน้าแรก", faq_h:"คำถามที่พบบ่อย",
      rel_k:"ดูเพิ่มเติม", rel_home:"กลับสู่หน้าแรก NEXT SEO24", cta_btn:"แชทผ่าน WhatsApp →",
      foot_made:"ผลิตในกัวลาลัมเปอร์ · ให้บริการทั่วโลก",
      foot_about:"เอเจนซี SEO และลิงก์ย้อนกลับแห่งกัวลาลัมเปอร์ เรานำเว็บไซต์ของคุณขึ้นหน้าแรกของ Google — ครอบคลุมเกาหลี ญี่ปุ่น และเอเชียตะวันออกเฉียงใต้", foot_svc:"บริการ", foot_markets:"ตลาด", foot_company:"บริษัท", foot_rights:"สงวนลิขสิทธิ์", foot_privacy:"ความเป็นส่วนตัว", foot_terms:"ข้อกำหนด", nav_cases:"กรณีศึกษา"
    },
    ko: {
      nav_home:"홈", nav_services:"서비스", nav_markets:"시장", nav_whyus:"회사 소개",
      nav_results:"성과", nav_contact:"문의", nav_cta:"무료 SEO 진단", nav_mag:"매거진", nav_price:"가격", art_hc:"2026 구글 도움이 되는 콘텐츠 시스템", art_wb:"화이트햇 백링크: 지금도 통하는 것", art_cw:"코어 웹 바이탈 & INP: 속도 체크리스트", art_nv:"네이버 vs 구글: 한국 검색 공략", art_se:"동남아 진출: 현지화 플레이북", art_sg:"온라인 스포츠 게임 앱 마케팅",
      svc_seo:"구글 SEO 순위", svc_back:"백링크 구축", svc_web:"웹사이트 개발", svc_content:"콘텐츠 & 카피라이팅",
      svc_sns:"소셜미디어 마케팅", svc_video:"영상 제작",
      mkt_kr:"한국 시장", mkt_jp:"일본 시장", mkt_sea:"동남아시아",
      by_team:"NEXT SEO24 팀", by_loc:"쿠알라룸푸르", by_updated:"최종 업데이트 2026년 6월 3일",
      by_about:"팀 소개", bc_home:"홈", faq_h:"자주 묻는 질문",
      rel_k:"더 둘러보기", rel_home:"NEXT SEO24 홈으로", cta_btn:"WhatsApp으로 상담 →",
      foot_made:"쿠알라룸푸르에서 · 전 세계로",
      foot_about:"쿠알라룸푸르의 SEO &amp; 백링크 에이전시. 귀사의 웹사이트를 구글 첫 페이지에 — 한국, 일본, 동남아시아 전역에서.", foot_svc:"서비스", foot_markets:"시장", foot_company:"회사", foot_rights:"모든 권리 보유.", foot_privacy:"개인정보처리방침", foot_terms:"이용약관", nav_cases:"사례 연구"
    }
  };

  var PAGE = window.PAGE_I18N || {};
  var labels = { en:"EN", zh:"中文", ja:"日本語", th:"ไทย", ko:"한국어" };
  var htmlLang = { en:"en", zh:"zh", ja:"ja", th:"th", ko:"ko" };

  function dict(l){
    var c = COMMON[l] || {}, p = PAGE[l] || {}, out = {}, k;
    for (k in c) out[k] = c[k];
    for (k in p) out[k] = p[k];
    return out;
  }

  // capture English originals from the DOM
  var en = {};
  document.querySelectorAll("[data-i18n]").forEach(function(el){ en[el.dataset.i18n] = el.innerHTML; });

  function setLang(l){
    var d = l === "en" ? en : dict(l);
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var k = el.dataset.i18n;
      if (d[k] !== undefined) el.innerHTML = d[k];
      else if (en[k] !== undefined) el.innerHTML = en[k];
    });
    document.documentElement.lang = htmlLang[l] || "en";
    var lbl = document.getElementById("langLabel"); if (lbl) lbl.textContent = labels[l] || "EN";
    document.querySelectorAll(".lang-menu button").forEach(function(b){ b.classList.toggle("active", b.dataset.lang === l); });
    try { localStorage.setItem("rf_lang", l); } catch (e) {}
  }

  var lang = document.getElementById("lang");
  var langBtn = document.getElementById("langBtn");
  if (langBtn && lang) {
    langBtn.addEventListener("click", function(e){ e.stopPropagation(); lang.classList.toggle("open"); });
    document.addEventListener("click", function(){ lang.classList.remove("open"); });
  }
  document.querySelectorAll(".lang-menu button").forEach(function(b){
    b.addEventListener("click", function(){ setLang(b.dataset.lang); if (lang) lang.classList.remove("open"); });
  });

  var init = "en";
  try { init = localStorage.getItem("rf_lang") || "en"; } catch (e) {}
  if (init !== "en") setLang(init);
})();
