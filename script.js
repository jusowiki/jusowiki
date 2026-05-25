const menuBtn = document.getElementById("menuBtn");

const sideMenu = document.getElementById("sideMenu");

const overlay = document.getElementById("overlay");

const topBtn = document.getElementById("topBtn");

const rankGrid = document.getElementById("rankGrid");

menuBtn.addEventListener("click", () => {

  sideMenu.classList.add("open");

  overlay.classList.add("show");

});

overlay.addEventListener("click", () => {

  sideMenu.classList.remove("open");

  overlay.classList.remove("show");

});

topBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});

const categories = [

  {

    title: "웹툰순위",

    icon: "🖼️",

    items: ["뉴토끼", "마나토끼", "북토끼", "늑대닷컴", "해피툰", "블랙툰", "온도툰", "달툰", "편비", "뚜툰"]

  },

  {

    title: "성인순위",

    icon: "🔞",

    items: ["엑스비비기", "야동코리아", "AV19", "야스닷컴", "들어와", "돌려치기", "버스까", "섹시걸", "삼시색끼", "뽕가리"]

  },

  {

    title: "먹튀검증순위",

    icon: "📡",

    items: ["카지노다이소", "슬롯다이소", "먹튀다이소", "먹튀검문소", "먹튀검증소", "토토군", "먹튀폴리스", "다자바", "온카판", "토토일보"]

  },

  {

    title: "영화/드라마순위",

    icon: "▶️",

    items: ["티비위키", "누누티비", "달달티비", "별별티비", "온도티비", "땡땡티비", "티비룸", "티비몬", "콕콕티비", "라바티비"]

  },

  {

    title: "토렌트순위",

    icon: "🟢",

    items: ["토렌트큐큐", "토렌트좋다", "토렌트썸", "토렌트밤", "토렌트씨", "토렌트팁", "토렌트파이", "토렌트티티", "토렌트알지", "티프리카"]

  },

  {

    title: "스포츠중계",

    icon: "⭐",

    items: ["다이소티비", "빠른티비", "헐크티비", "킹콩티비", "압도티비", "강남티비", "배트맨티비", "블랙티비", "바셀티비", "해골티비"]

  },

  {

    title: "오피/유흥",

    icon: "🔞",

    items: ["오피가이드", "오피뷰", "오피매니아", "오피365", "오피아트", "대밤", "부달", "오밤", "밤의민족", "외로운밤"]

  },

  {

    title: "카지노순위",

    icon: "💬",

    items: ["우라칸", "오마카세", "반딧불", "골드울프", "썬벳", "비트365", "벙커", "미우", "카지노다이소", "슬롯다이소"]

  },

  {

    title: "성인용품",

    icon: "🔞",

    items: ["바나나몰", "강남약국", "짱그라", "바로약국", "천사약국", "아나도", "나이트몰", "십구센치", "토이러브", "핑크박스샵"]

  },

  {

    title: "토지노순위",

    icon: "🇰🇷",

    items: ["고광렬카지노", "자금카지노", "입점문의", "입점문의", "입점문의", "입점문의", "입점문의", "입점문의", "입점문의", "입점문의"]

  }

];

function medal(index) {

  if (index === 0) return "🥇";

  if (index === 1) return "🥈";

  if (index === 2) return "🥉";

  return `${index + 1}`;

}

categories.forEach(category => {

  const card = document.createElement("div");

  card.className = "rank-card";

  card.innerHTML = `

    <div class="rank-title">

      <span class="icon">${category.icon}</span>

      ${category.title}

      <span class="arrow">›</span>

    </div>

    <ul class="rank-list">

      ${category.items.map((item, index) => `

        <li>

          <span class="medal">${medal(index)}</span>

          <a href="#" onclick="return false;">${item}</a>

        </li>

      `).join("")}

    </ul>

  `;

  rankGrid.appendChild(card);

});