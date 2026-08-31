import type { Article } from '@/types/content';

export const articles: Article[] = [
  {
    slug: 'ruins-of-the-future',
    category: { en: 'Feature', fa: 'گزارش' },
    title: {
      en: 'The Ruins of the Future: Archaeology in Contemporary Art',
      fa: 'ویرانه‌های آینده: باستان‌شناسی در هنر معاصر',
    },
    excerpt: {
      en: 'How a generation of artists is turning excavation into a critical practice, unearthing the fragments of what has not yet been built.',
      fa: 'چگونه یک نسل از هنرمندان، کاوش را به عملی انتقادی تبدیل می‌کنند و پاره‌های آنچه هنوز ساخته نشده را بیرون می‌کشند.',
    },
    author: { en: 'Daria Khorrami', fa: 'دریا خرمی' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'There is a peculiar silence in the galleries where the new archaeology is being staged. Not the silence of absence, but the silence of things that have not yet arrived — fragments of a future that artists are digging up before it has had the chance to be built.',
            fa: 'در گالری‌هایی که باستان‌شناسی جدید در آن‌ها صحنه‌پردازی می‌شود، سکوتی عجیب حاکم است. نه سکوت غیاب، بلکه سکوت چیزهایی که هنوز نیامده‌اند — پاره‌هایی از آینده‌ای که هنرمندان پیش از آنکه ساخته شود، آن را بیرون می‌کشند.',
          },
        },
        {
          type: 'image',
          src: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=1400',
          alt: 'Excavation site installation with scattered fragments',
        },
        {
          type: 'caption',
          text: {
            en: 'Installation view, "Fragments of What Has Not Yet Been," 2025. Courtesy of the artist.',
            fa: 'نمای نصب، «پاره‌های آنچه هنوز نبوده»، ۱۴۰۴. با تشکر از هنرمند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'The practice has its precedents, of course. Gordon Matta-Clark carved through buildings to reveal the anatomy of architectural space. Mark Dion catalogued the debris of modernity with the taxonomic rigor of a nineteenth-century naturalist. But what distinguishes the current wave is its temporal orientation: these artists are not excavating the past. They are excavating the future — or rather, the ruins that the future has already begun to produce.',
            fa: 'البته این عمل پیش‌سابقه داشته است. گوردون ماتا-کلارک برای فاش کردن آناتمی فضای معماری از میان ساختمان‌ها برید. مارک دیون با دقت طبقه‌بندی‌شناختی یک طبیعت‌شناس قرن نوزدهم، زباله‌های مدرنیته را فهرست کرد. اما آنچه موج فعلی را متمایز می‌کند، جهت‌گیری زمانی آن است: این هنرمندان گذشته را کاوش نمی‌کنند. آن‌ها آینده را کاوش می‌کنند — یا بهتر بگوییم، ویرانه‌هایی را که آینده از همین حالا تولید کرده است.',
          },
        },
        {
          type: 'pullquote',
          text: {
            en: 'We are not digging for what was. We are digging for what will have been.',
            fa: 'ما برای آنچه بود کاوش نمی‌کنیم. برای آنچه خواهد بوده کاوش می‌کنیم.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'In a converted textile factory on the outskirts of Lisbon, the artist Hala Al-Sabah has filled 4,000 square meters with sand, broken concrete, and 3D-printed fragments of buildings that do not yet exist. Visitors walk through the installation with hard hats, guided by a protocol that mimics an actual archaeological dig. The effect is disorienting: one is never sure whether one is witnessing the aftermath of destruction or the premonition of construction.',
            fa: 'در یک کارخانه نساجی تبدیل‌شده در حومه لیسبون، هنرمند هلا الصباح ۴۰۰۰ متر مربع را با ماسه، بتن شکسته و قطعات چاپ سه‌بعدی ساختمان‌هایی که هنوز وجود ندارند پر کرده است. بازدیدکنندگان با کلاه ایمنی از میان نصب عبور می‌کنند و توسط پروتکلی هدایت می‌شوند که یک کاوش باستان‌شناسی واقعی را شبیه‌سازی می‌کند. اثر گیج‌کننده است: آدم هرگز مطمئن نیست که در حال شاهد ویرانی است یا پیش‌درآمدی از ساخت‌وساز.',
          },
        },
        {
          type: 'heading',
          level: 2,
          text: {
            en: 'The Ethics of the Unbuilt',
            fa: 'اخلاق آنچه نساخته‌ایم',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'For Al-Sabah, the project is an ethical inquiry. "We spend so much time mourning what we have lost," she tells me, sitting in the factory courtyard, "but we rarely consider what we are losing before we even have it. The ruins of the future are already here — in the demolished neighborhoods, in the cancelled projects, in the plans that were drawn up and then abandoned. My work is to give them a funeral they never received."',
            fa: 'برای الصباح، این پروژه یک پرسش اخلاقی است. او به من می‌گوید: «ما آنقدر زمان صرف سوگواری برای آنچه از دست داده‌ایم می‌کنیم، اما به ندرت به آنچه پیش از داشتن از دست می‌دهیم فکر می‌کنیم. ویرانه‌های آینده از همین حالا اینجا هستند — در محله‌های تخریب‌شده، در پروژه‌های لغوشده، در نقشه‌هایی که کشیده شدند و رها شدند. کار من این است که برایشان مراسمی ترتیب دهم که هرگز نداشتند.»',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'The question of what constitutes a ruin — and who gets to decide — is central to this new practice. In Tehran, a collective calling itself the Unbuilt Heritage Society has been documenting the architectural plans that were approved by the city\u2019s planning department but never realized. Their archive, now numbering over 12,000 entries, forms the basis of a series of exhibitions that present these phantom structures as if they had been excavated from a distant civilization.',
            fa: 'پرسش درباره اینکه چه چیزی یک ویرانه را تشکیل می‌دهد — و چه کسی حق تصمیم‌گیری را دارد — محور این عمل جدید است. در تهران، یک گروه که خود را «انجمن میراث نساخته» می‌نامد، در حال ثبت نقشه‌های معماری است که توسط اداره برنامه‌ریزی شهر تأیید شدند اما هرگز محقق نشدند. آرشیو آن‌ها که اکنون شامل بیش از ۱۲۰۰۰ مدخل است، پایه‌ای برای مجموعه‌ای از نمایشگاه‌هاست که این ساختارهای خیالی را چنان ارائه می‌کنند که گویی از یک تمدن دوردست کاوش شده‌اند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'What emerges from these practices is a new understanding of archaeology itself — not as a science of the past, but as a method for reading the present. The ruins of the future are not metaphors. They are the material traces of a world that is constantly being built and demolished, often before anyone has had the chance to live in it.',
            fa: 'آنچه از این اعمال برمی‌آید، فهم جدیدی از باستان‌شناسی است — نه به‌عنوان علم گذشته، بلکه به‌عنوان روشی برای خوانش حال. ویرانه‌های آینده استعاره نیستند. آن‌ها ردپای مادی جهانی هستند که دائماً ساخته و تخریب می‌شود، اغلب پیش از آنکه کسی فرصت زیستن در آن را داشته باشد.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'There is a peculiar silence in the galleries where the new archaeology is being staged. Not the silence of absence, but the silence of things that have not yet arrived — fragments of a future that artists are digging up before it has had the chance to be built.',
            fa: 'در گالری‌هایی که باستان‌شناسی جدید در آن‌ها صحنه‌پردازی می‌شود، سکوتی عجیب حاکم است. نه سکوت غیاب، بلکه سکوت چیزهایی که هنوز نیامده‌اند — پاره‌هایی از آینده‌ای که هنرمندان پیش از آنکه ساخته شود، آن را بیرون می‌کشند.',
          },
        },
        {
          type: 'image',
          src: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=1400',
          alt: 'نمای نصب با پاره‌های پراکنده',
        },
        {
          type: 'caption',
          text: {
            en: 'Installation view, "Fragments of What Has Not Yet Been," 2025. Courtesy of the artist.',
            fa: 'نمای نصب، «پاره‌های آنچه هنوز نبوده»، ۱۴۰۴. با تشکر از هنرمند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'The practice has its precedents, of course. Gordon Matta-Clark carved through buildings to reveal the anatomy of architectural space. Mark Dion catalogued the debris of modernity with the taxonomic rigor of a nineteenth-century naturalist. But what distinguishes the current wave is its temporal orientation: these artists are not excavating the past. They are excavating the future — or rather, the ruins that the future has already begun to produce.',
            fa: 'البته این عمل پیش‌سابقه داشته است. گوردون ماتا-کلارک برای فاش کردن آناتمی فضای معماری از میان ساختمان‌ها برید. مارک دیون با دقت طبقه‌بندی‌شناختی یک طبیعت‌شناس قرن نوزدهم، زباله‌های مدرنیته را فهرست کرد. اما آنچه موج فعلی را متمایز می‌کند، جهت‌گیری زمانی آن است: این هنرمندان گذشته را کاوش نمی‌کنند. آن‌ها آینده را کاوش می‌کنند — یا بهتر بگوییم، ویرانه‌هایی را که آینده از همین حالا تولید کرده است.',
          },
        },
        {
          type: 'pullquote',
          text: {
            en: 'We are not digging for what was. We are digging for what will have been.',
            fa: 'ما برای آنچه بود کاوش نمی‌کنیم. برای آنچه خواهد بوده کاوش می‌کنیم.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'In a converted textile factory on the outskirts of Lisbon, the artist Hala Al-Sabah has filled 4,000 square meters with sand, broken concrete, and 3D-printed fragments of buildings that do not yet exist. Visitors walk through the installation with hard hats, guided by a protocol that mimics an actual archaeological dig. The effect is disorienting: one is never sure whether one is witnessing the aftermath of destruction or the premonition of construction.',
            fa: 'در یک کارخانه نساجی تبدیل‌شده در حومه لیسبون، هنرمند هلا الصباح ۴۰۰۰ متر مربع را با ماسه، بتن شکسته و قطعات چاپ سه‌بعدی ساختمان‌هایی که هنوز وجود ندارند پر کرده است. بازدیدکنندگان با کلاه ایمنی از میان نصب عبور می‌کنند و توسط پروتکلی هدایت می‌شوند که یک کاوش باستان‌شناسی واقعی را شبیه‌سازی می‌کند. اثر گیج‌کننده است: آدم هرگز مطمئن نیست که در حال شاهد ویرانی است یا پیش‌درآمدی از ساخت‌وساز.',
          },
        },
        {
          type: 'heading',
          level: 2,
          text: {
            en: 'The Ethics of the Unbuilt',
            fa: 'اخلاق آنچه نساخته‌ایم',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'For Al-Sabah, the project is an ethical inquiry. "We spend so much time mourning what we have lost," she tells me, sitting in the factory courtyard, "but we rarely consider what we are losing before we even have it. The ruins of the future are already here — in the demolished neighborhoods, in the cancelled projects, in the plans that were drawn up and then abandoned. My work is to give them a funeral they never received."',
            fa: 'برای الصباح، این پروژه یک پرسش اخلاقی است. او به من می‌گوید: «ما آنقدر زمان صرف سوگواری برای آنچه از دست داده‌ایم می‌کنیم، اما به ندرت به آنچه پیش از داشتن از دست می‌دهیم فکر می‌کنیم. ویرانه‌های آینده از همین حالا اینجا هستند — در محله‌های تخریب‌شده، در پروژه‌های لغوشده، در نقشه‌هایی که کشیده شدند و رها شدند. کار من این است که برایشان مراسمی ترتیب دهم که هرگز نداشتند.»',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'The question of what constitutes a ruin — and who gets to decide — is central to this new practice. In Tehran, a collective calling itself the Unbuilt Heritage Society has been documenting the architectural plans that were approved by the city\u2019s planning department but never realized. Their archive, now numbering over 12,000 entries, forms the basis of a series of exhibitions that present these phantom structures as if they had been excavated from a distant civilization.',
            fa: 'پرسش درباره اینکه چه چیزی یک ویرانه را تشکیل می‌دهد — و چه کسی حق تصمیم‌گیری را دارد — محور این عمل جدید است. در تهران، یک گروه که خود را «انجمن میراث نساخته» می‌نامد، در حال ثبت نقشه‌های معماری است که توسط اداره برنامه‌ریزی شهر تأیید شدند اما هرگز محقق نشدند. آرشیو آن‌ها که اکنون شامل بیش از ۱۲۰۰۰ مدخل است، پایه‌ای برای مجموعه‌ای از نمایشگاه‌هاست که این ساختارهای خیالی را چنان ارائه می‌کنند که گویی از یک تمدن دوردست کاوش شده‌اند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'What emerges from these practices is a new understanding of archaeology itself — not as a science of the past, but as a method for reading the present. The ruins of the future are not metaphors. They are the material traces of a world that is constantly being built and demolished, often before anyone has had the chance to live in it.',
            fa: 'آنچه از این اعمال برمی‌آید، فهم جدیدی از باستان‌شناسی است — نه به‌عنوان علم گذشته، بلکه به‌عنوان روشی برای خوانش حال. ویرانه‌های آینده استعاره نیستند. آن‌ها ردپای مادی جهانی هستند که دائماً ساخته و تخریب می‌شود، اغلب پیش از آنکه کسی فرصت زیستن در آن را داشته باشد.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2025-11-15',
    type: 'feature',
  },
  {
    slug: 'quiet-monumentality',
    category: { en: 'Review', fa: 'نقد و بررسی' },
    title: {
      en: 'The Quiet Monumentality of Doris Salcedo',
      fa: 'بزرگ‌نمایی آرام دوریس سالسدو',
    },
    excerpt: {
      en: 'A retrospective at Tate Modern reveals an artist whose work refuses spectacle and insists on memory.',
      fa: 'نمایشگاه بازگشتی در تیت مدرن، هنرمندی را فاش می‌کند که اثرش از تماشاگری امتناع می‌کند و بر حافظه پافشاری می‌کند.',
    },
    author: { en: 'Reza Mansouri', fa: 'رضا منصوری' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'Doris Salcedo\u2019s retrospective at Tate Modern is not an exhibition you visit so much as one you endure. The works are quiet, the rooms are dim, and the cumulative effect is closer to mourning than to looking. This is, of course, the point.',
            fa: 'نمایشگاه بازگشتی دوریس سالسدو در تیت مدرن، نمایشگاهی نیست که از آن بازدید کنید، بلکه نمایشگاهی است که آن را تحمل می‌کنید. آثار آرام‌اند، اتاق‌ها تاریک‌اند و اثر تجمعی بیشتر شبیه سوگواری است تا نگاه کردن. البته این منظور است.',
          },
        },
        {
          type: 'image',
          src: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1400',
          alt: 'Sculptural installation with chairs in a void',
        },
        {
          type: 'paragraph',
          text: {
            en: 'Salcedo\u2019s sculptures are made from furniture — chairs, wardrobes, beds — that once belonged to victims of political violence. She fills them with concrete, stitches them with surgical thread, or stacks them in configurations that evoke both mass graves and domestic interiors. The result is a body of work that is simultaneously intimate and monumental, private and political.',
            fa: 'مجسمه‌های سالسدو از اثاثیه ساخته شده‌اند — صندلی، کمد، تخت — که روزی متعلق به قربانیان خشونت سیاسی بوده‌اند. او آن‌ها را با بتن پر می‌کند، با نخ جراحی می‌دوزد، یا به شکل‌هایی می‌چیند که هم یادآور گورهای دسته‌جمعی و هم فضاهای داخلی خانگی است. نتیجه مجموعه‌ای از آثار است که هم صمیمی و یادبودی است، هم خصوصی و سیاسی.',
          },
        },
        {
          type: 'pullquote',
          text: {
            en: 'A grave is a hole in the earth. A monument is a hole in memory. Salcedo fills both.',
            fa: 'گور سوراخی در زمین است. یادبود سوراخی در حافظه است. سالسدو هر دو را پر می‌کند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'The retrospective traces four decades of practice, from the early "Atrabiliarios" — niches in walls containing shoes belonging to disappeared women, sealed behind animal fiber and surgical thread — to the large-scale installations of the 2010s, in which Salcedo filled public spaces with tens of thousands of chairs or cracked the floor of the Tate\u2019s Turbine Hall with a fissure that ran the length of the room.',
            fa: 'این نمایشگاه بازگشتی چهار دهه فعالیت را دنبال می‌کند، از «آترابیلیاریوس»های اولیه — کنده‌کاری‌هایی در دیوار که شامل کفش‌های زنان ناپدیدشده بود و پشت الیاف حیوانی و نخ جراحی مهر و موم شده بود — تا نصب‌های بزرگ‌مقیاس دهه ۲۰۱۰، که در آن‌ها سالسدو فضاهای عمومی را با ده‌ها هزار صندلی پر کرد یا کف سالط توربین تیت را با شکافی به طول سالن شکافت.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'What makes Salcedo\u2019s work so difficult to write about is its refusal of the photographic. You can describe a Salcedo sculpture — its materials, its dimensions, its provenance — but you cannot reproduce the experience of standing in front of it. The weight is physical. The silence is acoustic. The loss is architectural.',
            fa: 'آنچه نوشتن درباره آثار سالسدو را بسیار دشوار می‌کند، امتناع آن از عکاسی است. می‌توانید یک مجسمه سالسدو را توصیف کنید — موادش، ابعادش، منشأش — اما نمی‌توانید تجربه ایستادن در برابرش را بازتولید کنید. وزن فیزیکی است. سکوت آکوستیک است. فقدان معماری است.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'Doris Salcedo\u2019s retrospective at Tate Modern is not an exhibition you visit so much as one you endure. The works are quiet, the rooms are dim, and the cumulative effect is closer to mourning than to looking. This is, of course, the point.',
            fa: 'نمایشگاه بازگشتی دوریس سالسدو در تیت مدرن، نمایشگاهی نیست که از آن بازدید کنید، بلکه نمایشگاهی است که آن را تحمل می‌کنید. آثار آرام‌اند، اتاق‌ها تاریک‌اند و اثر تجمعی بیشتر شبیه سوگواری است تا نگاه کردن. البته این منظور است.',
          },
        },
        {
          type: 'image',
          src: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1400',
          alt: 'نصب مجسمه‌ای با صندلی‌ها در یک خلأ',
        },
        {
          type: 'paragraph',
          text: {
            en: 'Salcedo\u2019s sculptures are made from furniture — chairs, wardrobes, beds — that once belonged to victims of political violence. She fills them with concrete, stitches them with surgical thread, or stacks them in configurations that evoke both mass graves and domestic interiors. The result is a body of work that is simultaneously intimate and monumental, private and political.',
            fa: 'مجسمه‌های سالسدو از اثاثیه ساخته شده‌اند — صندلی، کمد، تخت — که روزی متعلق به قربانیان خشونت سیاسی بوده‌اند. او آن‌ها را با بتن پر می‌کند، با نخ جراحی می‌دوزد، یا به شکل‌هایی می‌چیند که هم یادآور گورهای دسته‌جمعی و هم فضاهای داخلی خانگی است. نتیجه مجموعه‌ای از آثار است که هم صمیمی و یادبودی است، هم خصوصی و سیاسی.',
          },
        },
        {
          type: 'pullquote',
          text: {
            en: 'A grave is a hole in the earth. A monument is a hole in memory. Salcedo fills both.',
            fa: 'گور سوراخی در زمین است. یادبود سوراخی در حافظه است. سالسدو هر دو را پر می‌کند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'The retrospective traces four decades of practice, from the early "Atrabiliarios" — niches in walls containing shoes belonging to disappeared women, sealed behind animal fiber and surgical thread — to the large-scale installations of the 2010s, in which Salcedo filled public spaces with tens of thousands of chairs or cracked the floor of the Tate\u2019s Turbine Hall with a fissure that ran the length of the room.',
            fa: 'این نمایشگاه بازگشتی چهار دهه فعالیت را دنبال می‌کند، از «آترابیلیاریوس»های اولیه — کنده‌کاری‌هایی در دیوار که شامل کفش‌های زنان ناپدیدشده بود و پشت الیاف حیوانی و نخ جراحی مهر و موم شده بود — تا نصب‌های بزرگ‌مقیاس دهه ۲۰۱۰، که در آن‌ها سالسدو فضاهای عمومی را با ده‌ها هزار صندلی پر کرد یا کف سالط توربین تیت را با شکافی به طول سالن شکافت.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'What makes Salcedo\u2019s work so difficult to write about is its refusal of the photographic. You can describe a Salcedo sculpture — its materials, its dimensions, its provenance — but you cannot reproduce the experience of standing in front of it. The weight is physical. The silence is acoustic. The loss is architectural.',
            fa: 'آنچه نوشتن درباره آثار سالسدو را بسیار دشوار می‌کند، امتناع آن از عکاسی است. می‌توانید یک مجسمه سالسدو را توصیف کنید — موادش، ابعادش، منشأش — اما نمی‌توانید تجربه ایستادن در برابرش را بازتولید کنید. وزن فیزیکی است. سکوت آکوستیک است. فقدان معماری است.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2025-10-28',
    type: 'review',
    city: { en: 'London', fa: 'لندن' },
    venue: { en: 'Tate Modern', fa: 'تیت مدرن' },
  },
  {
    slug: 'art-after-ai',
    category: { en: 'Opinion', fa: 'نظر' },
    title: {
      en: 'Art After AI: Why the Hand Still Matters',
      fa: 'هنر پس از هوش مصنوعی: چرا دست هنوز مهم است',
    },
    excerpt: {
      en: 'The promise of generative models has not killed painting. It has made the question of touch more urgent than ever.',
      fa: 'وعده مدل‌های مولد، نقاشی را نکشته است. بلکه پرسش تماس را فوری‌تر از همیشه کرده است.',
    },
    author: { en: 'Shirin Neshat', fa: 'شیرین نشهات' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'Every few years, the art world announces the death of something. Painting has died more times than I can count. Photography was supposed to kill it. Video was supposed to kill it. The internet was supposed to kill it. Now artificial intelligence is supposed to kill it. And yet, in studios across the world, painters are still mixing pigment and stretching canvas. Why?',
            fa: 'هر چند سال، جهان هنر مرگ چیزی را اعلام می‌کند. نقاشی بیشتر از آنچه بتوانم بشمارم مرده است. عکاسی قرار بود آن را بکشد. ویدئو قرار بود آن را بکشد. اینترنت قرار بود آن را بکشد. حالا هوش مصنوعی قرار است آن را بکشد. و با این حال، در استودیوهای سراسر جهان، نقاش‌ها هنوز رنگ می‌سازند و بوم می‌کشند. چرا؟',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'The answer, I think, has less to do with nostalgia than with ontology. A painting is not an image. It is a record of a body moving through space and time. Every brushstroke is a decision, a hesitation, a correction. The surface of a painting is a map of attention — and attention, as every artist knows, is the most precious resource we have.',
            fa: 'پاسخ، فکر می‌کنم، کمتر به نوستالژی ربط دارد تا هستی‌شناسی. یک نقاشی تصویر نیست. آن ثبت حرکت یک بدن در فضا و زمان است. هر قلم‌مو یک تصمیم، یک تردید، یک اصلاح است. سطح یک نقاشی، نقشه توجه است — و توجه، همان‌طور که هر هنرمندی می‌داند، ارزشمندترین منبعی است که داریم.',
          },
        },
        {
          type: 'pullquote',
          text: {
            en: 'A machine can generate an image. It cannot generate the reason to look at one.',
            fa: 'یک ماشین می‌تواند تصویر تولید کند. نمی‌تواند دلیل نگاه کردن به یک تصویر را تولید کند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'Generative AI can produce images at a speed and quantity that no human can match. But speed and quantity have never been the point of art. The point of art is to slow us down, to make us look longer, to make us feel something we did not expect to feel. A machine-generated image, by definition, cannot do this — not because it lacks technical sophistication, but because it lacks the one thing that makes art worth looking at: the presence of a mind that chose, out of all the possible images it could have made, to make this one.',
            fa: 'هوش مصنوعی مولد می‌تواند تصاویر را با سرعت و کمّیتی تولید کند که هیچ انسانی نمی‌تواند با آن رقابت کند. اما سرعت و کمّیت هرگز منظور هنر نبوده‌اند. منظور هنر این است که ما را کند کند، به ما بیشتر نگاه دهد، چیزی را به ما حس بزند که انتظارش را نداشتیم. یک تصویر تولیدشده توسط ماشین، به‌تعریف، نمی‌تواند این کار را بکند — نه چون فنی پیشرفته ندارد، بلکه چون آن یک چیز را ندارد که هنر را ارزش نگاه کردن می‌کند: حضور ذهنی که از میان همه تصاویر ممکنی که می‌توانست بسازد، این یکی را انتخاب کرد.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'Every few years, the art world announces the death of something. Painting has died more times than I can count. Photography was supposed to kill it. Video was supposed to kill it. The internet was supposed to kill it. Now artificial intelligence is supposed to kill it. And yet, in studios across the world, painters are still mixing pigment and stretching canvas. Why?',
            fa: 'هر چند سال، جهان هنر مرگ چیزی را اعلام می‌کند. نقاشی بیشتر از آنچه بتوانم بشمارم مرده است. عکاسی قرار بود آن را بکشد. ویدئو قرار بود آن را بکشد. اینترنت قرار بود آن را بکشد. حالا هوش مصنوعی قرار است آن را بکشد. و با این حال، در استودیوهای سراسر جهان، نقاش‌ها هنوز رنگ می‌سازند و بوم می‌کشند. چرا؟',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'The answer, I think, has less to do with nostalgia than with ontology. A painting is not an image. It is a record of a body moving through space and time. Every brushstroke is a decision, a hesitation, a correction. The surface of a painting is a map of attention — and attention, as every artist knows, is the most precious resource we have.',
            fa: 'پاسخ، فکر می‌کنم، کمتر به نوستالژی ربط دارد تا هستی‌شناسی. یک نقاشی تصویر نیست. آن ثبت حرکت یک بدن در فضا و زمان است. هر قلم‌مو یک تصمیم، یک تردید، یک اصلاح است. سطح یک نقاشی، نقشه توجه است — و توجه، همان‌طور که هر هنرمندی می‌داند، ارزشمندترین منبعی است که داریم.',
          },
        },
        {
          type: 'pullquote',
          text: {
            en: 'A machine can generate an image. It cannot generate the reason to look at one.',
            fa: 'یک ماشین می‌تواند تصویر تولید کند. نمی‌تواند دلیل نگاه کردن به یک تصویر را تولید کند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'Generative AI can produce images at a speed and quantity that no human can match. But speed and quantity have never been the point of art. The point of art is to slow us down, to make us look longer, to make us feel something we did not expect to feel. A machine-generated image, by definition, cannot do this — not because it lacks technical sophistication, but because it lacks the one thing that makes art worth looking at: the presence of a mind that chose, out of all the possible images it could have made, to make this one.',
            fa: 'هوش مصنوعی مولد می‌تواند تصاویر را با سرعت و کمّیتی تولید کند که هیچ انسانی نمی‌تواند با آن رقابت کند. اما سرعت و کمّیت هرگز منظور هنر نبوده‌اند. منظور هنر این است که ما را کند کند، به ما بیشتر نگاه دهد، چیزی را به ما حس بزند که انتظارش را نداشتیم. یک تصویر تولیدشده توسط ماشین، به‌تعریف، نمی‌تواند این کار را بکند — نه چون فنی پیشرفته ندارد، بلکه چون آن یک چیز را ندارد که هنر را ارزش نگاه کردن می‌کند: حضور ذهنی که از میان همه تصاویر ممکنی که می‌توانست بسازد، این یکی را انتخاب کرد.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/1149798/pexels-photo-1149798.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2025-11-01',
    type: 'opinion',
  },
  {
    slug: 'tehran-biennial-returns',
    category: { en: 'News', fa: 'اخبار' },
    title: {
      en: 'Tehran Biennial Returns After Twelve-Year Hiatus',
      fa: 'دوسالانه تهران پس از دوازده سال بازمی‌گردد',
    },
    excerpt: {
      en: 'The 31st Tehran Biennial announces 87 artists from 34 countries under the theme "Threshold."',
      fa: 'سی‌ویکمین دوسالانه تهران با ۸۷ هنرمند از ۳۴ کشور و با محوریت «آستانه» اعلام شد.',
    },
    author: { en: 'Negar Assadi', fa: 'نگار اسدی' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'After a twelve-year hiatus, the Tehran Biennial of Contemporary Art has announced its return, with the 31st edition scheduled to open in March 2026. The biennial will feature 87 artists from 34 countries and will be curated under the theme "Threshold," a reference to both the architectural and political connotations of the word.',
            fa: 'پس از دوازده سال وقفه، دوسالانه هنر معاصر تهران بازگشت خود را اعلام کرده است. سی‌ویکمین دوره این دوسالانه قرار است در مارس ۲۰۲۶ افتتاح شود. این دوسالانه شامل ۸۷ هنرمند از ۳۴ کشور خواهد بود و با محوریت «آستانه» برگزار می‌شود — اشاره‌ای به هر دو معنای معماری و سیاسی این واژه.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'The curatorial team, led by co-directors Narges Mohammadi and international curator Charles Esche, described the theme as an exploration of "the spaces between — between nations, between disciplines, between the past and the possible." The biennial will be spread across five venues, including the Tehran Museum of Contemporary Art, the Artists\' Park, and three historic houses in the city center.',
            fa: 'تیم هنری، به سرپرستی مشترک نرگس محمدی و کیوریتور بین‌المللی چارلز اِش، این محور را کاوشی در «فضاهای میان — میان ملت‌ها، میان رشته‌ها، میان گذشته و ممکن» توصیف کرد. دوسالانه در پنج مکان برگزار خواهد شد، از جمله موزه هنر معاصر تهران، پارک هنرمندان و سه خانه تاریخی در مرکز شهر.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'After a twelve-year hiatus, the Tehran Biennial of Contemporary Art has announced its return, with the 31st edition scheduled to open in March 2026. The biennial will feature 87 artists from 34 countries and will be curated under the theme "Threshold," a reference to both the architectural and political connotations of the word.',
            fa: 'پس از دوازده سال وقفه، دوسالانه هنر معاصر تهران بازگشت خود را اعلام کرده است. سی‌ویکمین دوره این دوسالانه قرار است در مارس ۲۰۲۶ افتتاح شود. این دوسالانه شامل ۸۷ هنرمند از ۳۴ کشور خواهد بود و با محوریت «آستانه» برگزار می‌شود — اشاره‌ای به هر دو معنای معماری و سیاسی این واژه.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'The curatorial team, led by co-directors Narges Mohammadi and international curator Charles Esche, described the theme as an exploration of "the spaces between — between nations, between disciplines, between the past and the possible." The biennial will be spread across five venues, including the Tehran Museum of Contemporary Art, the Artists\' Park, and three historic houses in the city center.',
            fa: 'تیم هنری، به سرپرستی مشترک نرگس محمدی و کیوریتور بین‌المللی چارلز اِش، این محور را کاوشی در «فضاهای میان — میان ملت‌ها، میان رشته‌ها، میان گذشته و ممکن» توصیف کرد. دوسالانه در پنج مکان برگزار خواهد شد، از جمله موزه هنر معاصر تهران، پارک هنرمندان و سه خانه تاریخی در مرکز شهر.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2025-11-20',
    type: 'news',
    city: { en: 'Tehran', fa: 'تهران' },
  },
  {
    slug: 'wael-shawky-crusader',
    category: { en: 'Feature', fa: 'گزارش' },
    title: {
      en: 'Wael Shawky and the Crusades as Cinema',
      fa: 'وائل شوقی و جنگ‌های صلیبی به‌مثابه سینما',
    },
    excerpt: {
      en: 'The Egyptian artist\u2019s marionette films reframe medieval history through the lens of contemporary spectacle.',
      fa: 'فیلم‌های عروسکی هنرمند مصری، تاریخ قرون وسطی را از دریچه تماشاگری معاصر بازچارچوب می‌کنند.',
    },
    author: { en: 'Omid Rouhi', fa: 'امید روحی' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'Wael Shawky\u2019s "Cabaret Crusades" series — a trilogy of films performed by marionettes — is one of the most ambitious historical projects in contemporary art. Drawing on Amin Maalouf\u2019s 1983 book "The Crusades Through Arab Eyes," Shawky retells the medieval wars not as a clash of civilizations but as a theater of absurdity, betrayal, and accidental violence.',
            fa: 'مجموعه «کاباره جنگ‌های صلیبی» وائل شوقی — سه‌گانه‌ای از فیلم‌های با اجرای عروسک‌های خیمه‌شب‌بازی — یکی از جسورانه‌ترین پروژه‌های تاریخی در هنر معاصر است. شوقی با تکیه بر کتاب ۱۹۸۳ امین معلوف «جنگ‌های صلیبی از نگاه عرب»، جنگ‌های قرون وسطی را نه به‌عنوان تقابل تمدن‌ها، بلکه به‌عنوان تماشاگاهی از پوچی، خیانت و خشونت تصادفی بازگو می‌کند.',
          },
        },
        {
          type: 'image',
          src: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1400',
          alt: 'Marionette theater stage with dramatic lighting',
        },
        {
          type: 'paragraph',
          text: {
            en: 'The marionettes are hand-carved from wood and ceramic, each one modeled on a specific historical figure. The films are shot in elaborate sets that evoke medieval manuscripts, and the dialogue is delivered in classical Arabic, with subtitles that preserve the strangeness of the original. The effect is uncanny: history becomes a puppet show, but the puppets are more human than the humans they represent.',
            fa: 'عروسک‌ها از چوب و سرامیک دست‌تراشیده شده‌اند و هر یک بر اساس یک چهره تاریخی خاص مدل‌سازی شده است. فیلم‌ها در دکورهای پیچیده‌ای فیلمبرداری شده‌اند که یادآور نسخه‌های خطی قرون وسطی است و دیالوگ‌ها به عربی کلاسیک اجرا می‌شوند با زیرنویس‌هایی که غرابت اصلی را حفظ می‌کنند. اثر غریب است: تاریخ به نمایش عروسکی تبدیل می‌شود، اما عروسک‌ها انسانی‌تر از انسان‌هایی هستند که نماینده آن‌ها هستند.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'Wael Shawky\u2019s "Cabaret Crusades" series — a trilogy of films performed by marionettes — is one of the most ambitious historical projects in contemporary art. Drawing on Amin Maalouf\u2019s 1983 book "The Crusades Through Arab Eyes," Shawky retells the medieval wars not as a clash of civilizations but as a theater of absurdity, betrayal, and accidental violence.',
            fa: 'مجموعه «کاباره جنگ‌های صلیبی» وائل شوقی — سه‌گانه‌ای از فیلم‌های با اجرای عروسک‌های خیمه‌شب‌بازی — یکی از جسورانه‌ترین پروژه‌های تاریخی در هنر معاصر است. شوقی با تکیه بر کتاب ۱۹۸۳ امین معلوف «جنگ‌های صلیبی از نگاه عرب»، جنگ‌های قرون وسطی را نه به‌عنوان تقابل تمدن‌ها، بلکه به‌عنوان تماشاگاهی از پوچی، خیانت و خشونت تصادفی بازگو می‌کند.',
          },
        },
        {
          type: 'image',
          src: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1400',
          alt: 'صحنه نمایش عروسکی با نورپردازی دراماتیک',
        },
        {
          type: 'paragraph',
          text: {
            en: 'The marionettes are hand-carved from wood and ceramic, each one modeled on a specific historical figure. The films are shot in elaborate sets that evoke medieval manuscripts, and the dialogue is delivered in classical Arabic, with subtitles that preserve the strangeness of the original. The effect is uncanny: history becomes a puppet show, but the puppets are more human than the humans they represent.',
            fa: 'عروسک‌ها از چوب و سرامیک دست‌تراشیده شده‌اند و هر یک بر اساس یک چهره تاریخی خاص مدل‌سازی شده است. فیلم‌ها در دکورهای پیچیده‌ای فیلمبرداری شده‌اند که یادآور نسخه‌های خطی قرون وسطی است و دیالوگ‌ها به عربی کلاسیک اجرا می‌شوند با زیرنویس‌هایی که غرابت اصلی را حفظ می‌کنند. اثر غریب است: تاریخ به نمایش عروسکی تبدیل می‌شود، اما عروسک‌ها انسانی‌تر از انسان‌هایی هستند که نماینده آن‌ها هستند.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2025-09-30',
    type: 'feature',
  },
  {
    slug: 'material-memory-podcast',
    category: { en: 'Podcast', fa: 'پادکست' },
    title: {
      en: 'Material Memory: The Politics of Conservation',
      fa: 'حافظه مادی: سیاست حفاظت',
    },
    excerpt: {
      en: 'A conversation with conservator Saba Khorasani about what we choose to preserve and what we let disappear.',
      fa: 'گفت‌وگو با مرمت‌کار صبا خراسانی درباره آنچه انتخاب می‌کنیم حفظ کنیم و آنچه می‌گذاریم ناپدید شود.',
    },
    author: { en: 'Zamineh Editorial', fa: 'تحریریه زمینه' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'In this episode, we sit down with Saba Khorasani, a conservator who has worked on some of the most challenging restoration projects in the Middle East. We discuss the politics of conservation — who decides what gets saved, what gets restored, and what gets left to decay — and how the field is changing in an era of climate crisis and cultural destruction.',
            fa: 'در این قسمت، با صبا خراسانی، مرمت‌کاری که در برخی از چالش‌برانگیزترین پروژه‌های مرمت در خاورمیانه کار کرده است، گفت‌وگو می‌کنیم. ما درباره سیاست حفاظت صحبت می‌کنیم — چه کسی تصمیم می‌گیرد چه چیزی نجات پیدا کند، چه چیزی مرمت شود و چه چیزی رها شود تا فرو بپاشد — و اینکه این رشته در عصر بحران اقلیمی و تخریب فرهنگی چگونه در حال تغییر است.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'In this episode, we sit down with Saba Khorasani, a conservator who has worked on some of the most challenging restoration projects in the Middle East. We discuss the politics of conservation — who decides what gets saved, what gets restored, and what gets left to decay — and how the field is changing in an era of climate crisis and cultural destruction.',
            fa: 'در این قسمت، با صبا خراسانی، مرمت‌کاری که در برخی از چالش‌برانگیزترین پروژه‌های مرمت در خاورمیانه کار کرده است، گفت‌وگو می‌کنیم. ما درباره سیاست حفاظت صحبت می‌کنیم — چه کسی تصمیم می‌گیرد چه چیزی نجات پیدا کند، چه چیزی مرمت شود و چه چیزی رها شود تا فرو بپاشد — و اینکه این رشته در عصر بحران اقلیمی و تخریب فرهنگی چگونه در حال تغییر است.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/3761115/pexels-photo-3761115.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2025-11-10',
    type: 'podcast',
    duration: '47 min',
    episode: '12',
  },
  {
    slug: 'studio-visit-anahita',
    category: { en: 'Video', fa: 'ویدئو' },
    title: {
      en: 'Studio Visit: Anahita Razmi on Performance and Identity',
      fa: 'بازدید از استودیو: آناهیتا رزمی درباره پرفورمنس و هویت',
    },
    excerpt: {
      en: 'The Tehran-born, Berlin-based artist opens her studio for a conversation about exile, gesture, and the body as archive.',
      fa: 'هنرمند متولد تهران و مقیم برلین، استودیوی خود را برای گفت‌وگویی درباره تبعید، ژست و بدن به‌مثابه آرشیو باز می‌کند.',
    },
    author: { en: 'Zamineh Editorial', fa: 'تحریریه زمینه' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'In this studio visit, Anahita Razmi discusses her performance-based practice, which draws on the visual cultures of both Iran and Germany to explore questions of identity, exile, and the body as a site of political memory. Her work moves between video, live performance, and sculpture, often using her own body as both subject and medium.',
            fa: 'در این بازدید از استودیو، آناهیتا رزمی درباره عمل مبتنی بر پرفورمنس خود صحبت می‌کند که از فرهنگ‌های بصری ایران و آلمان برای کاوش پرسش‌های هویت، تبعید و بدن به‌عنوان جایگاه حافظه سیاسی بهره می‌برد. کار او میان ویدئو، پرفورمنس زنده و مجسمه‌سازی در حرکت است و اغلب از بدن خودش هم به‌عنوان سوژه و هم به‌عنوان رسانه استفاده می‌کند.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'In this studio visit, Anahita Razmi discusses her performance-based practice, which draws on the visual cultures of both Iran and Germany to explore questions of identity, exile, and the body as a site of political memory. Her work moves between video, live performance, and sculpture, often using her own body as both subject and medium.',
            fa: 'در این بازدید از استودیو، آناهیتا رزمی درباره عمل مبتنی بر پرفورمنس خود صحبت می‌کند که از فرهنگ‌های بصری ایران و آلمان برای کاوش پرسش‌های هویت، تبعید و بدن به‌عنوان جایگاه حافظه سیاسی بهره می‌برد. کار او میان ویدئو، پرفورمنس زنده و مجسمه‌سازی در حرکت است و اغلب از بدن خودش هم به‌عنوان سوژه و هم به‌عنوان رسانه استفاده می‌کند.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/3756765/pexels-photo-3756765.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2025-10-15',
    type: 'video',
    duration: '23 min',
  },
  {
    slug: 'venice-biennale-2026-preview',
    category: { en: 'Preview', fa: 'پیش‌نمایش' },
    title: {
      en: 'Venice Biennale 2026: What to Expect',
      fa: 'دوسالانه ونیز ۲۰۲۶: چه انتظاری می‌رود',
    },
    excerpt: {
      en: 'A guide to the 61st International Art Exhibition, from national pavilions to the most anticipated independent collateral events.',
      fa: 'راهنمای شصت‌ویکمین نمایشگاه بین‌المللی هنر، از غرفه‌های ملی تا مورد انتظارترین رویدادهای حاشیه‌ای مستقل.',
    },
    author: { en: 'Daria Khorrami', fa: 'دریا خرمی' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'The 61st Venice Biennale, opening in May 2026, promises to be one of the most politically charged editions in recent memory. With a curatorial framework that emphasizes displacement, migration, and the politics of borders, the biennale arrives at a moment when these themes have moved from the margins of contemporary art to the center of global debate.',
            fa: 'دوسالانه شصت‌ویکم ونیز که در مه ۲۰۲۶ افتتاح می‌شود، به نظر می‌رسد یکی از سیاسی‌ترین دوره‌های سال‌های اخیر باشد. با چارچوب هنری که بر جابجایی، مهاجرت و سیاست مرزها تأکید دارد، این دوسالانه در لحظه‌ای می‌رسد که این محورها از حاشیه هنر معاصر به مرکز بحث جهانی حرکت کرده‌اند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'Among the most anticipated national pavilions are the first-ever participation of Saudi Arabia, a return of the Iranian pavilion after a decade-long absence, and a controversial German pavilion that will reportedly address the country\u2019s colonial collections. The central exhibition, spread across the Arsenale and the Giardini, will feature 80 artists — the smallest number in over twenty years, a deliberate curatorial choice that emphasizes depth over breadth.',
            fa: 'در میان مورد انتظارترین غرفه‌های ملی، نخستین مشارکت عربستان سعودی، بازگشت غرفه ایران پس از یک دهه غیبت و غرفه جنجالی آلمان که به گفته گزارش‌ها به مجموعه‌های استعماری این کشور خواهد پرداخت، قرار دارند. نمایشگاه مرکزی که در آرسنال و جیاردینی گسترده است، شامل ۸۰ هنرمند خواهد بود — کمترین تعداد در بیش از بیست سال، انتخابی آگاهانه هنری که بر عمق به‌جای گستردگی تأکید دارد.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'The 61st Venice Biennale, opening in May 2026, promises to be one of the most politically charged editions in recent memory. With a curatorial framework that emphasizes displacement, migration, and the politics of borders, the biennale arrives at a moment when these themes have moved from the margins of contemporary art to the center of global debate.',
            fa: 'دوسالانه شصت‌ویکم ونیز که در مه ۲۰۲۶ افتتاح می‌شود، به نظر می‌رسد یکی از سیاسی‌ترین دوره‌های سال‌های اخیر باشد. با چارچوب هنری که بر جابجایی، مهاجرت و سیاست مرزها تأکید دارد، این دوسالانه در لحظه‌ای می‌رسد که این محورها از حاشیه هنر معاصر به مرکز بحث جهانی حرکت کرده‌اند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'Among the most anticipated national pavilions are the first-ever participation of Saudi Arabia, a return of the Iranian pavilion after a decade-long absence, and a controversial German pavilion that will reportedly address the country\u2019s colonial collections. The central exhibition, spread across the Arsenale and the Giardini, will feature 80 artists — the smallest number in over twenty years, a deliberate curatorial choice that emphasizes depth over breadth.',
            fa: 'در میان مورد انتظارترین غرفه‌های ملی، نخستین مشارکت عربستان سعودی، بازگشت غرفه ایران پس از یک دهه غیبت و غرفه جنجالی آلمان که به گفته گزارش‌ها به مجموعه‌های استعماری این کشور خواهد پرداخت، قرار دارند. نمایشگاه مرکزی که در آرسنال و جیاردینی گسترده است، شامل ۸۰ هنرمند خواهد بود — کمترین تعداد در بیش از بیست سال، انتخابی آگاهانه هنری که بر عمق به‌جای گستردگی تأکید دارد.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2025-11-18',
    type: 'preview',
    city: { en: 'Venice', fa: 'ونیز' },
  },
  {
    slug: 'gallery-system-crisis',
    category: { en: 'Opinion', fa: 'نظر' },
    title: {
      en: 'The Gallery System Is Not Broken. It Was Never Designed for This.',
      fa: 'سیستم گالری خراب نیست. هرگز برای این طراحی نشده بود.',
    },
    excerpt: {
      en: 'As mid-career artists leave their galleries, we must ask whether the commercial model can survive the platform economy.',
      fa: 'با رفتن هنرمندان میان‌سال از گالری‌هایشان، باید بپرسیم آیا مدل تجاری می‌تواند در اقتصاد پلتفرمی دوام بیاورد.',
    },
    author: { en: 'Reza Mansouri', fa: 'رضا منصوری' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'The recent wave of mid-career artists leaving their galleries — some for larger dealers, some for no gallery at all — has prompted the usual round of obituaries for the gallery system. But the system is not dying. It is doing exactly what it was designed to do: discovering artists, building markets, and taking a percentage. The problem is not the system. The problem is that the artists it was designed to serve no longer exist in the way the system assumes.',
            fa: 'موج اخیر رفتن هنرمندان میان‌سال از گالری‌هایشان — برخی به سوی دلالان بزرگ‌تر، برخی به سوی هیچ گالری — دور معمول مرثیه‌هایی برای سیستم گالری را برانگیخته است. اما این سیستم در حال مرگ نیست. دقیقاً همان کاری را می‌کند که برایش طراحی شده بود: کشف هنرمندان، ساخت بازار و گرفتن درصد. مشکل سیستم نیست. مشکل این است که هنرمندانی که سیستم برای خدمت به آن‌ها طراحی شده، دیگر به آن شکلی که سیستم فرض می‌کند وجود ندارند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'The gallery system was built for a world in which scarcity was the default condition of art. There were few artists, fewer collectors, and a limited number of physical spaces in which art could be seen. The internet has not eliminated scarcity — original works are still finite — but it has eliminated the monopoly on visibility that galleries once held. An artist with a strong Instagram presence can reach more people in a day than a gallery can reach in a month.',
            fa: 'سیستم گالری برای جهانی ساخته شد که در آن کمیابی، شرایط پیش‌فرض هنر بود. هنرمندان کم بودند، مجموع‌داران کمتر و فضاهای فیزیکی محدودی وجود داشت که هنر در آن‌ها دیده می‌شد. اینترنت کمیابی را از بین نبرده — آثار اصلی هنوز محدودند — اما انحصار بر دیدار را که گالری‌ها روزی داشتند از بین برده است. یک هنرمند با حضور قوی در اینستاگرام می‌تواند در یک روز به افراد بیشتری برسد تا یک گالری در یک ماه.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'The recent wave of mid-career artists leaving their galleries — some for larger dealers, some for no gallery at all — has prompted the usual round of obituaries for the gallery system. But the system is not dying. It is doing exactly what it was designed to do: discovering artists, building markets, and taking a percentage. The problem is not the system. The problem is that the artists it was designed to serve no longer exist in the way the system assumes.',
            fa: 'موج اخیر رفتن هنرمندان میان‌سال از گالری‌هایشان — برخی به سوی دلالان بزرگ‌تر، برخی به سوی هیچ گالری — دور معمول مرثیه‌هایی برای سیستم گالری را برانگیخته است. اما این سیستم در حال مرگ نیست. دقیقاً همان کاری را می‌کند که برایش طراحی شده بود: کشف هنرمندان، ساخت بازار و گرفتن درصد. مشکل سیستم نیست. مشکل این است که هنرمندانی که سیستم برای خدمت به آن‌ها طراحی شده، دیگر به آن شکلی که سیستم فرض می‌کند وجود ندارند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'The gallery system was built for a world in which scarcity was the default condition of art. There were few artists, fewer collectors, and a limited number of physical spaces in which art could be seen. The internet has not eliminated scarcity — original works are still finite — but it has eliminated the monopoly on visibility that galleries once held. An artist with a strong Instagram presence can reach more people in a day than a gallery can reach in a month.',
            fa: 'سیستم گالری برای جهانی ساخته شد که در آن کمیابی، شرایط پیش‌فرض هنر بود. هنرمندان کم بودند، مجموع‌داران کمتر و فضاهای فیزیکی محدودی وجود داشت که هنر در آن‌ها دیده می‌شد. اینترنت کمیابی را از بین نبرده — آثار اصلی هنوز محدودند — اما انحصار بر دیدار را که گالری‌ها روزی داشتند از بین برده است. یک هنرمند با حضور قوی در اینستاگرام می‌تواند در یک روز به افراد بیشتری برسد تا یک گالری در یک ماه.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/1666067/pexels-photo-1666067.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2025-10-05',
    type: 'opinion',
  },
  {
    slug: 'climate-art-report',
    category: { en: 'News', fa: 'اخبار' },
    title: {
      en: 'Climate Crisis Reshapes Public Art Commissions',
      fa: 'بحران اقلیمی سفارش‌های هنر عمومی را دگرگون می‌کند',
    },
    excerpt: {
      en: 'Cities are rewriting their public art briefs to prioritize sustainability and ecological awareness.',
      fa: 'شهرها در حال بازنویسی فراخوان هنر عمومی خود برای اولویت‌دادن به پایداری و آگاهی بوم‌شناختی هستند.',
    },
    author: { en: 'Negar Assadi', fa: 'نگار اسدی' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'A growing number of cities are rewriting their public art commissioning guidelines to account for the climate crisis. From Rotterdam to Mexico City, municipal art programs are introducing requirements for sustainable materials, carbon-neutral installation processes, and thematic engagement with ecological themes.',
            fa: 'تعداد فزاینده‌ای از شهرها در حال بازنویسی دستورالعمل‌های سفارش هنر عمومی خود برای توجه به بحران اقلیمی هستند. از روتردام تا مکزیکوسیتی، برنامه‌های هنری شهرداری‌ها در حال وضع الزاماتی برای مواد پایدار، فرآیندهای نصب کربن‌خنثی و درگیری موضوعی با محورهای بوم‌شناختی هستند.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'A growing number of cities are rewriting their public art commissioning guidelines to account for the climate crisis. From Rotterdam to Mexico City, municipal art programs are introducing requirements for sustainable materials, carbon-neutral installation processes, and thematic engagement with ecological themes.',
            fa: 'تعداد فزاینده‌ای از شهرها در حال بازنویسی دستورالعمل‌های سفارش هنر عمومی خود برای توجه به بحران اقلیمی هستند. از روتردام تا مکزیکوسیتی، برنامه‌های هنری شهرداری‌ها در حال وضع الزاماتی برای مواد پایدار، فرآیندهای نصب کربن‌خنثی و درگیری موضوعی با محورهای بوم‌شناختی هستند.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2025-11-22',
    type: 'news',
  },
  {
    slug: 'review-olafur-weather',
    category: { en: 'Review', fa: 'نقد و بررسی' },
    title: {
      en: 'Olafur Eliasson: The Weather Project, Revisited',
      fa: 'اولافور الیاسون: پروژه آب‌وهوا، بازدید دوباره',
    },
    excerpt: {
      en: 'Two decades after it transformed Tate Modern\u2019s Turbine Hall, we reassess the installation that taught a generation to look up.',
      fa: 'دو دهه پس از آنکه سالط توربین تیت مدرن را دگرگون کرد، نصبی را که به یک نسل آموخت بالا را نگاه کنند، از نو ارزیابی می‌کنیم.',
    },
    author: { en: 'Shirin Neshat', fa: 'شیرین نشهات' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'It is easy to forget, in an era of immersive digital experiences, how radical Olafur Eliasson\u2019s "The Weather Project" felt when it opened in 2003. A semicircular sun made of hundreds of mono-frequency lamps, a mirrored ceiling that doubled the Turbine Hall\u2019s height, and a fine mist that hung in the air — these were not technological innovations. They were perceptual ones.',
            fa: 'در عصر تجربه‌های دیجیتال غوطه‌ور، آسان است فراموش کنیم که «پروژه آب‌وهوا» اولافور الیاسون هنگام گشایش در ۲۰۰۳ چقدر رادیکال به نظر می‌رسید. خورشید نیم‌دایره‌ای ساخته‌شده از صدها لامپ تک‌فرکانس، سقف آینه‌ای که ارتفاع سالط توربین را دوبرابر می‌کرد و مه ریزانی که در هوا معلق بود — این‌ها نوآوری‌های فناورانه نبودند. نوآوری‌های ادراکی بودند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'Two million people visited the installation during its six-month run. Many lay on the floor of the Turbine Hall and stared at the ceiling, watching themselves reflected in the mirror above. It was, as critics noted at the time, less an art exhibition than a collective ritual — a moment when a museum became a public square, and looking became a form of being together.',
            fa: 'دو میلیون نفر در طول شش ماه از این نصب بازدید کردند. بسیاری روی کف سالط توربین دراز کشیدند و به سقف خیره شدند و خود را در آینه بالای سرشان دیدند. همان‌طور که منتقدان در آن زمان یاد کردند، این کمتر یک نمایشگاه هنری بود تا یک آیین جمعی — لحظه‌ای که موزه به میدان عمومی تبدیل شد و نگاه کردن شکلی از با هم بودن شد.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'It is easy to forget, in an era of immersive digital experiences, how radical Olafur Eliasson\u2019s "The Weather Project" felt when it opened in 2003. A semicircular sun made of hundreds of mono-frequency lamps, a mirrored ceiling that doubled the Turbine Hall\u2019s height, and a fine mist that hung in the air — these were not technological innovations. They were perceptual ones.',
            fa: 'در عصر تجربه‌های دیجیتال غوطه‌ور، آسان است فراموش کنیم که «پروژه آب‌وهوا» اولافور الیاسون هنگام گشایش در ۲۰۰۳ چقدر رادیکال به نظر می‌رسید. خورشید نیم‌دایره‌ای ساخته‌شده از صدها لامپ تک‌فرکانس، سقف آینه‌ای که ارتفاع سالط توربین را دوبرابر می‌کرد و مه ریزانی که در هوا معلق بود — این‌ها نوآوری‌های فناورانه نبودند. نوآوری‌های ادراکی بودند.',
          },
        },
        {
          type: 'paragraph',
          text: {
            en: 'Two million people visited the installation during its six-month run. Many lay on the floor of the Turbine Hall and stared at the ceiling, watching themselves reflected in the mirror above. It was, as critics noted at the time, less an art exhibition than a collective ritual — a moment when a museum became a public square, and looking became a form of being together.',
            fa: 'دو میلیون نفر در طول شش ماه از این نصب بازدید کردند. بسیاری روی کف سالط توربین دراز کشیدند و به سقف خیره شدند و خود را در آینه بالای سرشان دیدند. همان‌طور که منتقدان در آن زمان یاد کردند، این کمتر یک نمایشگاه هنری بود تا یک آیین جمعی — لحظه‌ای که موزه به میدان عمومی تبدیل شد و نگاه کردن شکلی از با هم بودن شد.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2025-09-12',
    type: 'review',
    city: { en: 'London', fa: 'لندن' },
    venue: { en: 'Tate Modern', fa: 'تیت مدرن' },
  },
  {
    slug: 'archive-disappearing-figures',
    category: { en: 'Feature', fa: 'گزارش' },
    title: {
      en: 'The Disappearing Figures of Iranian Modernism',
      fa: 'چهره‌های ناپدیدشونده مدرنیسم ایرانی',
    },
    excerpt: {
      en: 'A look back at the artists who shaped Iran\u2019s modern art movement and the archives that are fighting to preserve their memory.',
      fa: 'نگاهی به هنرمندانی که جنبش هنر مدرن ایران را شکل دادند و آرشیوهایی که برای حفظ حافظه آن‌ها می‌جنگند.',
    },
    author: { en: 'Daria Khorrami', fa: 'دریا خرمی' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'The history of Iranian modernism is written in fragments. Some of its key figures — Marcos Grigorian, Charles Hossein Zenderoudi, Monir Shahroudy Farmanfarmaian — are well known. But many others have been forgotten, their works scattered across private collections, their archives lost to political upheaval and the passage of time.',
            fa: 'تاریخ مدرنیسم ایران در پاره‌ها نوشته شده است. برخی از چهره‌های کلیدی آن — مارکوس گریگوریان، شارل حسین زندرودی، مونیر شهردی فرمانفرمائیان — شناخته‌شده‌اند. اما بسیاری دیگر فراموش شده‌اند، آثارشان در مجموعه‌های خصوصی پراکنده، آرشیوهایشان در پی بحران‌های سیاسی و گذر زمان گم شده‌اند.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'The history of Iranian modernism is written in fragments. Some of its key figures — Marcos Grigorian, Charles Hossein Zenderoudi, Monir Shahroudy Farmanfarmaian — are well known. But many others have been forgotten, their works scattered across private collections, their archives lost to political upheaval and the passage of time.',
            fa: 'تاریخ مدرنیسم ایران در پاره‌ها نوشته شده است. برخی از چهره‌های کلیدی آن — مارکوس گریگوریان، شارل حسین زندرودی، مونیر شهردی فرمانفرمائیان — شناخته‌شده‌اند. اما بسیاری دیگر فراموش شده‌اند، آثارشان در مجموعه‌های خصوصی پراکنده، آرشیوهایشان در پی بحران‌های سیاسی و گذر زمان گم شده‌اند.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2024-03-15',
    type: 'feature',
    originalPublication: { en: 'Zamineh Quarterly, Issue 14', fa: 'فصلنامه زمینه، شماره ۱۴' },
    year: '2024',
  },
  {
    slug: 'archive-sculpture-symposium',
    category: { en: 'Feature', fa: 'گزارش' },
    title: {
      en: 'The 1975 Tehran Sculpture Symposium',
      fa: 'سمپوزیوم مجسمه‌سازی تهران ۱۳۵۴',
    },
    excerpt: {
      en: 'A forgotten chapter of Iranian art history, when artists from twenty countries gathered in a Tehran park for two weeks of public sculpture.',
      fa: 'فصل فراموش‌شده‌ای از تاریخ هنر ایران، زمانی که هنرمندانی از بیست کشور برای دو هفته مجسمه‌سازی عمومی در پارکی در تهران گرد آمدند.',
    },
    author: { en: 'Omid Rouhi', fa: 'امید روحی' },
    body: {
      en: [
        {
          type: 'paragraph',
          text: {
            en: 'In the autumn of 1975, the city of Tehran hosted an event that would be largely forgotten for decades: the International Sculpture Symposium of Tehran. Artists from twenty countries were invited to create large-scale sculptures in a public park over the course of two weeks, with the works remaining as permanent installations. The event was part of a global wave of sculpture symposia that began in Austria in 1959 and spread across the world.',
            fa: 'در پاییز ۱۳۵۴، شهر تهران میزبان رویدادی بود که برای دهه‌ها تا حد زیادی فراموش می‌شد: سمپوزیوم بین‌المللی مجسمه‌سازی تهران. هنرمندانی از بیست کشور دعوت شدند تا در طول دو هفته مجسمه‌های بزرگ‌مقیاس در یک پارک عمومی خلق کنند و آثار به‌عنوان نصب‌های دائمی باقی می‌ماندند. این رویداد بخشی از موج جهانی سمپوزیوم‌های مجسمه‌سازی بود که در ۱۹۵۹ در اتریش آغاز شد و در سراسر جهان گسترش یافت.',
          },
        },
      ],
      fa: [
        {
          type: 'paragraph',
          text: {
            en: 'In the autumn of 1975, the city of Tehran hosted an event that would be largely forgotten for decades: the International Sculpture Symposium of Tehran. Artists from twenty countries were invited to create large-scale sculptures in a public park over the course of two weeks, with the works remaining as permanent installations. The event was part of a global wave of sculpture symposia that began in Austria in 1959 and spread across the world.',
            fa: 'در پاییز ۱۳۵۴، شهر تهران میزبان رویدادی بود که برای دهه‌ها تا حد زیادی فراموش می‌شد: سمپوزیوم بین‌المللی مجسمه‌سازی تهران. هنرمندانی از بیست کشور دعوت شدند تا در طول دو هفته مجسمه‌های بزرگ‌مقیاس در یک پارک عمومی خلق کنند و آثار به‌عنوان نصب‌های دائمی باقی می‌ماندند. این رویداد بخشی از موج جهانی سمپوزیوم‌های مجسمه‌سازی بود که در ۱۹۵۹ در اتریش آغاز شد و در سراسر جهان گسترش یافت.',
          },
        },
      ],
    },
    image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1400',
    date: '2023-06-20',
    type: 'feature',
    originalPublication: { en: 'Zamineh Quarterly, Issue 9', fa: 'فصلنامه زمینه، شماره ۹' },
    year: '2023',
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByType(type: Article['type']): Article[] {
  return articles.filter((a) => a.type === type);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.type === 'feature').slice(0, 3);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  return articles
    .filter((a) => a.slug !== slug && a.type === current.type)
    .slice(0, limit);
}

export function getPrevNextArticles(slug: string): {
  prev?: Article;
  next?: Article;
} {
  const index = articles.findIndex((a) => a.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? articles[index - 1] : undefined,
    next: index < articles.length - 1 ? articles[index + 1] : undefined,
  };
}
