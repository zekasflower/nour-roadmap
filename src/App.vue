<script setup>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

// ICONS
import twitter_icon from '@/assets/icons/twitter.svg'
import youtube_icon from '@/assets/icons/youtube.svg'
import udemy_icon from '@/assets/icons/udemy.svg'
import url_chain_icon from '@/assets/icons/chain.svg'

// IMAGES
import pic_no_1 from '@/assets/pic-1.png'
import pic_no_2 from '@/assets/pic-2.png'
import pic_no_3 from '@/assets/pic-3.png'
import pic_no_4 from '@/assets/pic-4.png'
import pic_no_5 from '@/assets/pic-5.png'
import pic_no_6 from '@/assets/pic-6.png'
import pic_no_7 from '@/assets/pic-7.png'
import pic_no_8 from '@/assets/pic-8.png'
import pic_no_9 from '@/assets/pic-9.png'
import pic_no_10 from '@/assets/pic-10.png'
import pic_no_11 from '@/assets/pic-11.png'
import pic_no_12 from '@/assets/pic-12.png'
import pic_no_13 from '@/assets/pic-13.png'
import pic_no_14 from '@/assets/pic-14.png'
import pic_no_15 from '@/assets/pic-15.png'
import pic_no_16 from '@/assets/pic-16.png'
import pic_no_17 from '@/assets/pic-17.png'
import pic_no_18 from '@/assets/pic-18.png'
import pic_no_19 from '@/assets/pic-19.png'
import pic_no_20 from '@/assets/pic-20.png'

const beforeEnter = (el) => {
  el.style.height = '0';
};
const enter = (el) => {
  el.style.height = el.scrollHeight + 'px';
};
const beforeLeave = (el) => {
  enter(el);
};
const leave = (el) => {
  beforeEnter(el);
};

const disclosures = ref([
  // 1001
  {
    id: 1001,
    heading: 'الجزء الأول: القصة',
    content: {
      html_inject:`
        <p>نور سأل على تويتر: حد مهتم انزل roadmap للfrontend كنت كاتبها لواحد صاحبي زمان، هعملها ابديت وانزلها؟</p>
        <p>تنبيه: هي منحازة بشكل كامل لتجربتي انا  والحاجات اللي انا جربتها بنفسي</p>
        <p>وبعد ما نزلها فكرت إنها تكون website لخطوات الroadmap</p>
        <p>
          ودا لينك التويتة:
          <a href="https://x.com/nourIsAnxious/status/1805189804822261980" target="_blank">
            <img src="${ twitter_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    },
  },

  // 1002
  {
    id: 1002,
    heading: 'الجزء الثاني: الroadmap دي لمين؟',
    content: {
      html_inject: `
        <p>
          الرودماب دي هتكون للشخص اللي عايز يتعلم فرونت اند من قبل الصفر ف هيكون في مصادر مبدئية 
          لحاجات برا الفرونت اند كمان، سكيب الحاجات اللي انت عارفها وابدأ من اول ما مستواك يجيبك.
        </p>
        <p>
          ودا لينك الثريد الخاص بالرودماب: 
          <a href="https://x.com/nourIsAnxious/status/1805230941465371123" target="_blank">
            <img src="${ twitter_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    },
  },

  // 1003
  {
    id: 1003,
    heading: 'الجزء الثالث: من أين جاءت الرودماب؟',
    content: {
      has_image: true,
      image_source: pic_no_1,
      image_url: 'https://roadmap.sh/frontend',
      html_inject: `
        <p>
          ده لينك الـroadmap مبدأياً بس مش هتاخدها كلها بنسبة ١٠٠٪ وكل اللينكات اللي هحطها ليها بدايل كتير بس انا هحط ترشيحاتي او حاجات شوفتها بنفسي: 
          <a href="https://roadmap.sh/frontend" target="_blank">
            <img src="${ url_chain_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1004
  {
    id: 1004,
    heading: 'الجزء الرابع: ما قبل تعلم البرمجة',
    content: {
      has_image: true,
      image_source: pic_no_2,
      image_url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAx8xKvAXpb6f0Urj98Xo7zg',
      html_inject: `
        <p>
          شوف البلاي ليست دي استفتاحية كده مجرد كلام عام عن يعني ايه برمجة:
          <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAx8xKvAXpb6f0Urj98Xo7zg" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1005
  {
    id: 1005,
    heading: 'الجزء الخامس: كيف يعمل الإنترنت؟',
    content: {
      has_image: true,
      image_source: pic_no_3,
      image_url: 'https://youtu.be/zN8YNNHcaZc',
      html_inject: `
        <p>
          نصيحتي الاولى تمشي زي ماهو عامل اول خطوة انك تاخد مبادئ الانترنت وازاي الويب شغال اصلا وهنا ممكن تشوف الفيديو ده او تدور على حاجة تانية براحتك
        </p>
        <p>
          كيف يعمل الإنترنت (بالعربي): 
          <a href="https://youtu.be/TnMNDQHB33Q" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
        <p>
          كيف يعمل الإنترنت (بالإنجليزي):
          <a href="https://youtu.be/zN8YNNHcaZc" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1006
  {
    id: 1006,
    heading: 'الجزء السادس: مبادئ البرمجة',
    content: {
      has_image: true,
      image_source: pic_no_4,
      image_url: 'https://www.youtube.com/playlist?list=PLvGNfY-tFUN8HRLDE-D2sXvIgYwspdmFE',
      html_inject: `
        <p>
          بعدها هتحتاج تعرف مبادئ البرمجة اصلا اللي تدخلك مجال الويب ف ممكن تشوف البلاي ليست دي:
          <a href="https://www.youtube.com/playlist?list=PLvGNfY-tFUN8HRLDE-D2sXvIgYwspdmFE" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1007
  {
    id: 1007,
    heading: 'الجزء السابع: كيف يعمل الويب؟',
    content: {
      has_image: true,
      image_source: pic_no_5,
      image_url: 'https://www.youtube.com/playlist?list=PLvGNfY-tFUN91XLzmWjYbLFqui386WWw0',
      html_inject: `
        <p>
          بعدها هتحتاج تفهم مكونات الويب الاساسية شغالة ازاي قبل ما تبدأ تتعلمها
        </p>
        <p>
          ودي بلاي ليست بتشرح حاجة زي دي:
          <a href="https://www.youtube.com/playlist?list=PLvGNfY-tFUN91XLzmWjYbLFqui386WWw0" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1008
  {
    id: 1008,
    heading: 'الجزء الثامن: قبل أن تبدأ الفرونت',
    content: {
      html_inject: `
        <ul class="listed-list gap-y-7">
          <li>
            <p>
              بعد ما تفهم كل ده هييجي وقت انك تبدأ تتعلم فرونت اند بجد
            </p>
            <p>
              انا اتعلمت (HTML, CSS, JS) اللي هما اساس الفرونت اند من موقع وقناة الزيرو
            </p>
            <p>
              اول خطوة انك تتعلم HTML اللي انت هتكون عرفت هي ايه من البلاي ليست اللي فوق.
            </p>
          </li>

          <li>
            <p>
              هتدخل موقع 
              <a href="https://elzero.org/" target="_blank" class="text-primary underline">elzero.org</a>
              وده هتلاقي عليه خريطة لكل كورس من اللي جايين والتمارين العملية بتاعتهم عشان دي حاجة مهمة جدا.
            </p>
            <p>
              لما تخش الموقع هتختار كورس HTML مثلا هتلاقي معاه حاجة اسمها التطبيقات العملية او حاجة بالمعنى ده يعني
            </p>
          </li>

          <li>
            <p>
              هتدخل عليها هتلاقيه مقسملك عدد فيديوهات معين على عدد تمارين معين هتشوف الفيديوهات دي من اليوتيوب وتروح تحل التحديات دي من على الموقع ودي حاجة هتعملها في الـ3 كورسات دول.
            </p>
          </li>
        </ul>
      `,
    }
  },

  // 1009
  {
    id: 1009,
    heading: 'الجزء التاسع: تعلم HTML',
    content: {
      has_image: true,
      image_source: pic_no_6,
      image_url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji',
      html_inject: `
        <p>
          كورس HTML: 
          <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1010
  {
    id: 1010,
    heading: 'الجزء العاشر: تعلم CSS',
    content: {
      has_image: true,
      image_source: pic_no_7,
      image_url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe',
      html_inject: `
        <p>
          كورس CSS: 
          <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1011
  {
    id: 1011,
    heading: 'الجزء الحادي عشر: تمرينات على HTML/CSS',
    content: {
      has_image: true,
      image_source: pic_no_8,
      image_url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAyGaRGzPVZCkYx5L7Mo9Tbh',
      html_inject: `
        <p>
          قبل ما تدخل على كورس JavaScript هتحتاج تتمرن كتير على اول كورسين دول ف ببساطة بعد ما تخلص التحديات اللي على الموقع بتوع الكورسين كلها هتدخل تطبق الـ4 تطبيقات دي معاه:
        </p>
        <ul class="listed-list">
          <li>
            <p>
              أول واحد:
              <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAzHSjcR-HnW9tnxyuye8KbF" target="_blank">
                <img src="${ youtube_icon }" class="inline-flex" />
              </a>
            </p>
          </li>
          <li>
            <p>
              تاني واحد:
              <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAy1l-2A21ng3gxEyocruT0t" target="_blank">
                <img src="${ youtube_icon }" class="inline-flex" />
              </a>
            </p>
          </li>
          <li>
            <p>
              تالت واحد:
              <a href="https://youtube.com/playlist?list=PLDoPjvoNmBAxuCSp2_-9LurPqRVwketnc" target="_blank">
                <img src="${ youtube_icon }" class="inline-flex" />
              </a>
            </p>
          </li>
          <li>
            <p>
              رابع واحد:
              <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAyGaRGzPVZCkYx5L7Mo9Tbh" target="_blank">
                <img src="${ youtube_icon }" class="inline-flex" />
              </a>
            </p>
          </li>
        </ul>
      `,
    }
  },

  // 1012
  {
    id: 1012,
    heading: 'الجزء الثاني عشر: المزيد من التمرينات',
    content: {
      html_inject: `
        <p>
          لو لسه حاسس انك مش متمكن اوي بعد ما تخلص دول جرب تعمل حاجات لوحدك و هنا هرشحلك بقوة موقع 
          <a href="https://www.frontendmentor.io/" target="_blank" class="text-primary underline">frontendmentor.io</a>
          هو سهل تتعامل معاه بيديك تطبيقات من اقل مستوى لأعلى مستوى تعملها بنفسك وتنزلها للناس وتاخد فيدباك عليه
        </p>
      `,
    }
  },

  // 1013
  {
    id: 1013,
    heading: 'الجزء الثالث عشر: أول لغة برمجة - JavaScript',
    content: {
      has_image: true,
      image_source: pic_no_9,
      image_url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv',
      html_inject: `
        <p>
          بعد ما تتمكن من الـHTML & CSS هنبدأ ندخل في اول لغة برمجة هتتعلمها وهي JavaScript. وبرضو زي اللي فات هتدخل الموقع مع كورس اليوتيوب وهكذا
        </p>
        <p>
          كورس JavaScript (بالعربي):
          <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
        <p>
          كورس JavaScript (بالإنجليزي): 
          <a href="https://www.udemy.com/course/the-complete-javascript-course" target="_blank">
            <img src="${ udemy_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1014
  {
    id: 1014,
    heading: 'الجزء  الرابع عشر: تمرينات على JavaScript',
    content: {
      has_image: true,
      image_source: pic_no_10,
      image_url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAycCXz5d9WvqlmykUIys5e8',
      html_inject: `
        <p>
          لما توصل هنا بقى هتحتاج تفصل فترة عن انك تتعلم حاجة جديدة و تبدأ تطبق كتير جدا على اللي انت اتعلمته لحد ما تبقى شارب كل ده 100% ف اللي انت هتعمله انك هتدخل البلاي ليست دي يامعلم وتعيش بقى مش لازم تعملها كلها طبعا بس اعمل كتير وغير في الكود وجرب لحد ما تفهم الـlogic كله: 
          <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAycCXz5d9WvqlmykUIys5e8" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1015
  {
    id: 1015,
    heading: 'الجزء الخامس عشر: ما قبل الframework',
    content: {
      html_inject: `
        <p>
          لما تخلص كده انت معاك اساس الفرونت اند وهتبدأ تبص لمفترق الطرق وهو انك تختار javascript framework تشتغل بيه وأشهر تلاتة في وقتنا الحالي في سوق العمل هما React, Angular, Vue هتحتاج تاخد نظرة عامة عن التلاتة ومقارنات بينهم وهما ايه اصلا عشان تقرر،
        </p>
        <p>
          ممكن تشوف الفيديو ده:
          <a href="https://youtu.be/YRVavS9SzBw" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
        <p>
          طبعا في frameworks كتير تانية بس دول اشهر تلاتة في سوق العمل دلوقتي واكترهم شهرة هو React وده اللي انا اخترته وشغال بيه
        </p>
      `,
    }
  },

  // 1016
  {
    id: 1016,
    heading: 'الجزء  السادس عشر: ما هو الReact',
    content: {
      has_image: true,
      image_source: pic_no_11,
      image_url: 'https://youtu.be/N3AkSS5hXMA',
      html_inject: `
        <p>
          في البداية هتحتاج تعرف ايه هو React ف ممكن تشوف ده يديك نظرة عامة:
          <a href="https://youtu.be/N3AkSS5hXMA" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1017
  {
    id: 1017,
    heading: 'الجزء  السابع عشر: تعلم React',
    content: {
      has_image: true,
      image_source: pic_no_12,
      image_url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux',
      html_inject: `
        <p>
          بعدين هتدخل اول كورس في React والحقيقة اللي هديهولك ده هو أشمل كورس ممكن تشوفه وكمان مؤخراً بقى فيه كونتنت جديد لحاجة هنحتاج نتعلمها بعدين:
        </p>
        <p>
          لينك الكورس: 
          <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux" target="_blank">
            <img src="${ udemy_icon }" class="inline-flex" />
          </a>
        </p>
        <p>
          لو معجبكش ممكن تبص على ده عظيم جدا برضو
        </p>
        <p>
          لينك الكورس: 
          <a href="https://www.udemy.com/course/react-tutorial-and-projects-course" target="_blank">
            <img src="${ udemy_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1018
  {
    id: 1018,
    heading: 'الجزء الثامن عشر: تمرينات على React',
    content: {
      html_inject: `
        <p>
          وزي اللي فات بعد ما تخلص هتحتاج تعمل مشاريع كتير جدا عشان تفهم react لانه حاجة كبيرة شويتين ف هرشحلك القناة دي:
          <a href="https://www.youtube.com/@javascriptmastery" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
        <p>
          بس طبعا هتدور على اليوتيوب على مشاريع تعملها بشكل عام برا عن القناة دي كمان مجرد انك هتكتب react projects هيجيلك مليون حاجة
        </p>
      `,
    }
  },

  // 1019
  {
    id: 1019,
    heading: 'الجزء  التاسع عشر: تعلم TypeScript',
    content: {
      has_image: true,
      image_source: pic_no_13,
      image_url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ',
      html_inject: `
        <p>
          الخطوة الجاية هي انك هتحتاج حاجة كمان مع React وهي NextJS وده framework لـReact نفسه لأنه فيه بعض المشاكل و NextJS حلها، كل الكلام ده والمشاكل دي هتعرفها لما توصل هناك.
        </p>
        <p>
          بس عشان تتعلم NextJS هتحتاج تتعلم حاجة جديدة، وهي Typescript ودي برضو اتعملت عشان تدي قوة اكتر لـJavascript ودي اللي NextJs شغال بيها (ممكن تكتب فيه JavaScript بس منصحش بكده).
        </p>
        <p>
          تقدر تشوف الكورس بتاعها من هنا(بالعربي):
          <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
        <p>
          كورس تاني (بالإنجليزي):
          <a href="https://youtu.be/gieEQFIfgYc" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1020
  {
    id: 1020,
    heading: 'الجزء  العشرون: تعلم Next.js',
    content: {
      has_image: true,
      image_source: pic_no_14,
      image_url: 'https://www.udemy.com/course/nextjs-react-the-complete-guide',
      html_inject: `
        <p>
          دلوقتي تقدر تتعلم NextJS من هنا او انت هتكون اصلا اتعلمته مع كورس جوناس ولكن انا بفضل اني افصل بين react و next:
          <a href="https://www.udemy.com/course/nextjs-react-the-complete-guide" target="_blank">
            <img src="${ udemy_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1021
  {
    id: 1021,
    heading: 'الجزء  الحادي والعشرون: تعلم Cypress',
    content: {
      has_image: true,
      image_source: pic_no_15,
      image_url: 'https://youtu.be/u8vMu7viCm8',
      html_inject: `
        <p>
          كده يامعلم انت هتحتاج حاجات اضافية انت ممكن تتعلمها في اي وقت مش شرط بعد ما تخلص كل دول ولكن مهمة جدا زي مثلا مكتبات الـTesting عشان تختبر الكود بتاعك:
        </p>
        <ul class="listed-list">
          <li>
            <p>
              أول فيديو:
              <a href="https://youtu.be/AS79oJ3Fcf0" target="_blank">
                <img src="${ youtube_icon }" class="inline-flex" />
              </a>
            </p>
          </li>
          <li>
            <p>
              تاني فيديو:
              <a href="https://youtu.be/u8vMu7viCm8" target="_blank">
                <img src="${ youtube_icon }" class="inline-flex" />
              </a>
            </p>
          </li>
          <li>
            <p>
              تالت فيديو:
              <a href="https://youtu.be/8vfQ6SWBZ-U" target="_blank">
                <img src="${ youtube_icon }" class="inline-flex" />
              </a>
            </p>
          </li>
        </ul>
      `,
    }
  },

  // 1022
  {
    id: 1022,
    heading: 'الجزء  الثاني والعشرون: تعلم Git & GitHub',
    content: {
      has_image: true,
      image_source: pic_no_16,
      image_url: 'https://youtu.be/Q6G-J54vgKc',
      html_inject: `
        <p>
          حاجة كمان وهي git & github:
          <a href="https://youtu.be/Q6G-J54vgKc" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1023
  {
    id: 1003,
    heading: 'الجزء  الثالث والعشرون: تعلم الCSS Frameworks',
    content: {
      has_image: true,
      image_source: pic_no_17,
      image_url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAyvm7f--dc6XqkpfDcen_vQ',
      html_inject: `
        <p>
          حاجة اضافية كمان مهمة وهتساعدك في تسريع كود الـCSS بتاعك في المراحل المتقدمة هي الـCSS frameworks واشهر اتنين هما Bootstrap و Tailwind وانت لما تتعلم واحدة هتفهم الباقي كلهم لأن يعتبر شغالين بنفس الطريقة، انا بحبذ الشغل بـ React + Tailwind عشان اسهل بس عموما، اغلب الناس بتبدأ بـBootstrap ف ممكن تبص عليه من هنا:
          <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAyvm7f--dc6XqkpfDcen_vQ" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1024
  {
    id: 1024,
    heading: 'الجزء  الرابع والعشرون: برمجة الCSS',
    content: {
      has_image: true,
      image_source: pic_no_18,
      image_url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAzlpyFHOaB3b-eubmF0TAV2',
      html_inject: `
        <p>
          حاجة تانية خاصة بالـCSS برضو وهي الـCSS Preprocessors ودي حاجة كده بتدي للـCSS قوة لغات البرمجة زي الـSASS وتقدر تبص عليها من هنا:
          <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAzlpyFHOaB3b-eubmF0TAV2" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1025
  {
    id: 1025,
    heading: 'الجزء  الخامس والعشرون: إحسان وتحسين',
    content: {
      html_inject: `
        <p>
          ممكن دلوقتي تعلى بمستواك وتدور على مصطلحات زي الـmodule bundlers والـTask runners وازاي تحسن الـperformance بتاع الابلكيشن
        </p>
      `,
    }
  },

  // 1026
  {
    id: 1026,
    heading: 'الجزء  السادس والعشرون: عاش يا أشطر Developer 🥳',
    content: {
      html_inject: `
        <p>
          دول كده الحاجات الاساسية وأي حاجة زيادة بتساعدك طبعا وبتزود فرصك اكتر واكتر بس كل اللي عليك تعمله انك من اول ما تتعلم React متبطلش تعمل مشاريع جنب الوقت اللي انت بتتعلم فيه حاجات جديدة عشان الممارسة هي اللي هتعمل منك حاجة مش انك تخلص الكورسات بسرعة وخلاص.
        </p>
      `,
    }
  },

  // 1027
  {
    id: 1027,
    heading: 'الجزء  السابع والعشرون: Bonus لأشطر نقاش',
    content: {
      has_image: true,
      image_source: pic_no_19,
      image_url: 'https://www.udemy.com/course/pro-frontend-engineer-reactjs-typescript-redux-nextjs-api-tailwindcss',
      html_inject: `
        <p>
          ده كورس react + next + typescript  بالعربي لطيف برضو بس محبذش حد مبتدئ يبدأ بيه:
          <a href="https://www.udemy.com/course/pro-frontend-engineer-reactjs-typescript-redux-nextjs-api-tailwindcss" target="_blank">
            <img src="${ udemy_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1028
  {
    id: 1028,
    heading: 'الجزء  الثامن والعشرون: تعلم ال Web Accessibility',
    content: {
      has_image: true,
      image_source: pic_no_20,
      image_url: 'https://youtu.be/e2nkq3h1P68',
      html_inject: `
        <p>
          ده فيديو بيشرح الـaccessibility لأنه توبيك مهم:
          <a href="https://youtu.be/e2nkq3h1P68" target="_blank">
            <img src="${ youtube_icon }" class="inline-flex" />
          </a>
        </p>
      `,
    }
  },

  // 1029
  {
    id: 1029,
    heading: 'الجزء  التاسع والعشرون: النهاية 🥳🎉❤️',
    content: {
      html_inject: `
        <p>
          وأخيراً كل المصادر اللي انا حاططها ليها مليون بديل بس انا حاولت اجيب المصادر اللي بالعربي واللي انا شوفتها بنفسي، انت كده معاك الخطة ذاكر من اي مكان تحبه، بالتوفيق.
        </p>
      `,
    }
  },
])
</script>

<template>
  <div class="md:w-[690px] mx-auto">
    <header class="text-center py-8 md:py-16">
      <h1 class="text-4xl md:text-7xl font-babylonica mb-3 md:mb-5">Nour’s Frontend Roadmap</h1>
      <h2 class="font-aref text-xl md:text-4xl">
        مبدأياً &nbsp;
        كدا يارب نور يسافر هولندا
      </h2>
    </header>

    <section
      dir="rtl"
      class="the-only-component"
      v-for="disclosure in disclosures"
      :key="disclosure.id"
    >
      <Disclosure v-slot="{ open }" :defaultOpen="disclosure.id === 1001">
        <DisclosureButton
          class="
            bg-primary text-light flex items-center justify-between w-full text-sm md:text-base
            py-2 px-4 md:py-3 md:px-6 border-b"
        >
          <h3 class="text-lg" v-text="disclosure.heading"></h3>
          <img
            src="@/assets/icons/chevron.svg"
            class="transition duration-300"
            :class="{ '-rotate-90': open }"
          />
        </DisclosureButton>
        <Transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
          <DisclosurePanel class="transition-all duration-300 overflow-hidden" static v-show="open">
            <section class="p-4 md:p-6 text-sm: md:text-base">
              <section class="flex flex-col md:flex-row items-center md:items-start gap-y-4 gap-x-6">
                <section v-html="disclosure.content.html_inject" class="leading-7 flex-1"></section>
                <section v-if="disclosure.content?.has_image" class="w-52 md:w-64 flex-none -order-1 md:order-2">
                  <a :href="disclosure.content?.image_url" target="_blank">
                    <img :src="disclosure.content?.image_source" />
                  </a>
                </section>
              </section>
            </section>
          </DisclosurePanel>
        </Transition>
      </Disclosure>
    </section>

    <section
      class="
        nour-info-card flex flex-col md:flex-row items-center md:items-start gap-6
        py-10 md:py-16 px-6 text-center md:text-left
      "
    >
      <div class="flex-none">
        <img
          src="@/assets/nour-pic.jpeg"
          class="w-24 h-24 md:w-[120px] md:h-[120px] rounded-full object-cover"
        >
      </div>
      <div>
        <h2 class="text-xl md:text-2xl font-bold mb-3.5">Nour Wael</h2>
        <h3 class="font-semibold mb-2.5">
          Frontend Software Engineer <br class="md:hidden" /> (React JS & Next JS) | Web Developer
        </h3>
        <p class="text-sm md:text-base text-mid-gray leading-normal md:leading-[1.9] mb-6">
          As a Frontend Software Engineer, I am dedicated to crafting intuitive and
          high-performance user interfaces using React, Next.js, and contemporary
          JavaScript frameworks. I excel in addressing intricate challenges and take
          pleasure in transforming concepts into reality with clean, organized code.
        </p>

        <ul class="flex items-center justify-center md:justify-start gap-x-6">
          <li class="transition duration-300 hover:brightness-[1.17]">
            <a href="https://x.com/nourIsAnxious" target="_blank">
              <img src="@/assets/icons/twitter.svg" />
            </a>
          </li>
          <li class="transition duration-300 hover:brightness-[1.17]">
            <a href="https://www.linkedin.com/in/nour-waell/" target="_blank">
              <img src="@/assets/icons/linkedin.svg" />
            </a>
          </li>
          <li class="transition duration-300 hover:brightness-[1.17]">
            <a href="https://www.pinterest.com/Frxzen666/" target="_blank">
              <img src="@/assets/icons/pinterest.svg" />
            </a>
          </li>
          <li class="transition duration-300 hover:brightness-[1.17]">
            <a href="https://www.instagram.com/noursvision" target="_blank">
              <img src="@/assets/icons/instagram.svg" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <footer class="text-center">
      <h2 class="font-aref text-2xl md:text-4xl mb-5 md:mb-8">
        وفي النهاية يارب نور يسافر هولندا
      </h2>
      <h1 class="bg-primary text-3xl md:text-[55px] leading-none font-nabla py-5 md:py-8">Nour’s Frontend Roadmap</h1>
    </footer>
  </div>
</template>

<style>
.listed-list {
  @apply list-[square] pr-6 flex flex-col
}
.listed-list li > * {
  @apply relative -top-0.5
}
</style>