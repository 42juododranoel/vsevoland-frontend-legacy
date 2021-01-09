<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-10-md">
          <Heading1 inner="Заголовок первого уровня" />
          <Heading2 inner="Заголовок второго уровня" />
          <Heading3 inner="Заголовок третьего уровня" />

          <Paragraph
            inner="На этой странице я собираю правила оформления «Всеволенда». Сюда
          идёт всё, что касается редактуры, типографики, вёрстки и дизайна, но
          больше всего здесь вёрстки, отсюда и название. Со временем я
          добавляю новое и перефигачиваю старое."
            no-indent="true"
          />
          <Paragraph
            inner="Творения, без которых эта страница не появилась бы:"
          />
        </div>
      </div>
    </div>

    <hr />
    <hr />
    <hr />

    <div class="container">
      <div class="row">
        <div class="col-10-md spaced-below">
          <p>Творения, без которых эта страница не появилась бы:</p>
          <ul>
            <li>
              <p>
                <a
                  class="inline-link"
                  href="https://bureau.ru/projects/book-typography/"
                  >«<span class="link">Типографика и вёрстка</span>»,</a
                >
              </p>
            </li>
            <li>
              <p>
                <a class="inline-link" href="https://artlebedev.ru/kovodstvo"
                  >«<span class="link">Ководство</span>»,</a
                >
              </p>
            </li>
            <li>
              <p>
                <a
                  class="inline-link"
                  href="https://www.artlebedev.ru/izdal/spravochnik-izdatelya-i-avtora/"
                  >«<span class="link">Справочник издателя и автора</span>»,</a
                >
              </p>
            </li>
            <li>
              <p>
                <a class="inline-link" href="https://book.glvrd.ru"
                  >«<span class="link">Пиши, сокращай</span>»,</a
                >
              </p>
            </li>
            <li>
              <p>
                <a
                  class="inline-link"
                  href="https://store.artlebedev.ru/books/typography/zhivaya-tipografika/"
                  >«<span class="link">Живая типографика</span>».</a
                >
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <figure>
            <figcaption>
              Больше всего на меня повлияла выставка «Библия Гутенберга».
              <a class="inline-link" href=""
                ><span class="link">Фоточки</span>.</a
              >
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-10-md">
          <h2>Типографика</h2>

          <h3>Расстановка дефисов</h3>
          <p>
            Сайт сам расставляет дефисы, но весьма хреново, в будущем решительно
            переделаю:
          </p>
          <p class="indent">
            Переосвидетельствоваться, субстанционализироваться,
            интернационализироваться, человеконенавистничество,
            высокопревосходительство, одиннадцатиклассница,
            делопроизводительница, неудовлетворительно,
            тетрагидропиранилциклопентилтетрагидропиридопиридиновые.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-10-md">
          <h3>Висячая пунктуация</h3>
          <p>Сайт сам свешивает пунктуацию:</p>
          <p class="indent">
            «Хоба висячая кавычка. Рыбатекст, разнообразный и богатый опыт
            консультации с широким активом представляет собой интересный
            эксперимент проверки системы обучения кадров, соответствует насущным
            потребностям».
          </p>
          <p class="indent">
            (Хоба висячая скобка. Рыбатекст, начало повседневной работы по
            формированию позиции требуют определения и уточнения направлений
            прогрессивного развития).
          </p>
          <p>
            Сейчас сайт свешивает пунктуацию везде, но иногда это не к месту,
            руками убираю. В будущем автоматизирую и добавлю больше символов.
          </p>

          <figure>
            <figcaption>
              Висячая пунктуация в старинной греческой книге.
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="row">
        <div class="col-10-md">
          <h3>Неразрывные пробелы</h3>
          <p>
            Сайт сам расставляет неразрывные пробелы, но зачастую хреново, в
            будущем перепишу по-своему:
          </p>
          <p class="indent">
            Рыбатекст, по дороге, по дорожке, по тропинке, по шоссе, по
            тротуару, по следам, по реке, по озеру, по морю, по небу, по земле,
            по дороге, по дорожке, по тропинке, по шоссе, по тротуару, по
            следам, по реке, по озеру, по морю, по небу, по земле.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-10-md">
          <h3>Буква ё</h3>
          <p>Использовать ё, не заменять на е.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-10-md">
          <h3>Точка в конце</h3>
          <p>Ставить точку в конце всего, кроме заголовков.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-10-md">
          <h3>Иностранные слова</h3>
          <p>
            Заменять всю иностранщину на русский. <strike>HTML</strike> ХТМЛ,
            <strike>имейдж</strike> образ, <strike>билд</strike> сборка. И
            никаких «кейсов», прости господи. Если замена русским делает слово
            непонятным, то искать похожее понятное слово до последнего. Если
            найти не получается, то можно написать иностранное, но русскими
            буквами.
          </p>
          <p>
            Безжалостно курочить двойные согласные и всякие свистоперделки:
            <strike>паддинг</strike> падинг,
            <strike>«Яндекс.Такси»</strike> «Яндекс-такси». Слова можно крутить
            как угодно, пока не будут хорошо звучать по-русски: Python —
            <strike>«Пайтон»</strike> «Питон», LineageOS —
            <strike>«ЛинейджОС»</strike> «Линейдж».
          </p>
          <p>
            В японских словах не сокращать двойные согласные. Никакой
            поливановщины: <strike>«Симакадзе»</strike> «Шимаказе».
          </p>
          <p>
            Иностранные цитаты, которые обычно произносят по-русски, писать
            по-русски: «Хело ворлд», «Донт рипит ёрселф», «Сингл сорс оф трус».
            Если важно передать их в оригинале — чётко дать знать, что сейчас
            будет цитата, не вкраплять латинский текст для понтов, как
            некоторые.
          </p>
          <p>Для всех этих правил есть общее исключение — здравый смысл.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-10-md spaced-below">
          <h2>Вёрстка</h2>
          <p>
            Страницы подчинены вертикальной и горизонтальной сеткам, по бокам
            поля.
          </p>

          <h3>Вертикальная сетка</h3>
          <p>
            Размеры текстовых элементов и все отступы кратны размеру шага
            вертикальной сетки — девяти пикселям. Верхний и нижний края
            текстовых элементов проходят по краям строчных букв.
          </p>
          <p>
            Благодаря этому не приходится бодаться с отступами текста при
            вёрстке модульных страниц.
            <a class="inline-link" href="https://bureau.ru/tehnovedro/gridness/"
              ><span class="link">Слизал у бюро</span>.</a
            >
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col interline-below">
          <div id="border-example" class="row">
            <div class="col-4-md interline-below">
              <h1>Заголовок первого уровня</h1>
            </div>
            <div class="col-4-md interline-below">
              <h2>Заголовок второго уровня</h2>
            </div>
            <div class="col-4-md interline-below">
              <h3>Заголовок третьего уровня</h3>
            </div>
            <div class="col-4-md interline-below">
              <p>Абзац текста</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-10-md">
          <h3>Горизонтальная сетка</h3>
          <p class="interline-below">
            Шестнадцать колонок, между ними отступ в два шага вертикальной
            сетки. Колонки можно объединять и смещать.
            <a class="inline-link" href="https://getbootstrap.com/"
              ><span class="link">Слизал у «Бутстрапа»</span>:</a
            >
          </p>
        </div>
      </div>

      <div class="row columns-example interline-below">
        <div class="col-1-md">I</div>
        <div class="col-1-md">II</div>
        <div class="col-1-md">III</div>
        <div class="col-1-md">IV</div>
        <div class="col-1-md">V</div>
        <div class="col-1-md">VI</div>
        <div class="col-1-md">VII</div>
        <div class="col-1-md">VIII</div>
        <div class="col-1-md">IX</div>
        <div class="col-1-md">X</div>
        <div class="col-1-md">XI</div>
        <div class="col-1-md">XII</div>
        <div class="col-1-md">XIII</div>
        <div class="col-1-md">XIV</div>
        <div class="col-1-md">XV</div>
        <div class="col-1-md">XVI</div>
      </div>

      <div class="row columns-example interline-below">
        <div class="col-10-md">col-10-md</div>
        <div class="col-6-md">col-6-md</div>
      </div>

      <div class="row columns-example one-line-below">
        <div class="off-1-md col-4-md">off-1-md col-4-md</div>
        <div class="off-6-md col-4-md">off-6-md col-4-md</div>
        <div class="off-11-md col-4-md">off-11-md col-4-md</div>
      </div>

      <div class="row">
        <div class="col-10-md">
          <p class="interline-below">
            На маленьких экранах колонки по умолчанию встают одну под другую, но
            это можно отключить, убрав постфиксы и добавив офсеты:
          </p>
        </div>
      </div>

      <div class="row columns-example one-line-below">
        <div class="col-8">col-8</div>
        <div class="off-8 col-8">off-8 col-8</div>
      </div>

      <div class="row">
        <div class="col-10-md">
          <p>Сайт адаптируется к трём типам экранов:</p>
          <ul>
            <li><p>sm — до 960 пикселей,</p></li>
            <li><p>md — от sm до 1400 пикселей,</p></li>
            <li><p>lg — от md и шире.</p></li>
          </ul>
          <p>
            Если дописать постфикс к классу, то класс сработает на указанном
            типе и шире. Классы срабатывают в порядке увеличения ширины экрана.
          </p>
        </div>
      </div>
    </div>

    <div id="fields-example" class="container splash">
      <div class="row">
        <div class="col-10-md">
          <h3>Поля</h3>
          <p>
            По бокам страница сжата полями. На sm они занимают по двадцать
            пикселей. На md и lg они тянутся от шести процентов и до такого
            размера, чтобы сжать центральную часть до 1250 и 1590 пикселей
            соответственно. Благодаря этому центральная часть страницы не
            тянется до бесконечности.
            <a
              class="inline-link link"
              href="https://bureau.ru/soviet/20190221/"
              >Слизал у бюро.</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-10-md spaced-below">
          <h3>Элементы вёрстки</h3>
          <p>Дальше идёт оформление элементов вёрстки.</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <hr />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-10-md">
          <h1>Заголовок первого уровня</h1>
          <p>
            Сверху и снизу отступы по две строки. Дальше рыбатекст,
            разнообразный и богатый опыт консультации с широким активом
            представляет собой интересный эксперимент проверки системы обучения
            кадров, соответствует насущным потребностям.
          </p>

          <h2>Заголовок второго уровня</h2>
          <p>
            Сверху отступ в две строки, снизу одна строка. Дальше рыбатекст,
            разнообразный и богатый опыт консультации с широким активом
            представляет собой интересный эксперимент проверки системы обучения
            кадров, соответствует насущным потребностям.
          </p>

          <h3>Заголовок третьего уровня</h3>
          <p>
            Сверху отступ в одну строку и междустрочное расстояние, снизу просто
            междустрочное расстояние. Дальше рыбатекст, разнообразный и богатый
            опыт консультации с широким активом представляет собой интересный
            эксперимент проверки системы обучения кадров, соответствует насущным
            потребностям.
          </p>

          <p>
            Абзац текста. Сверху отступа нет, снизу одна строка. Дальше
            рыбатекст, разнообразный и богатый опыт консультации с широким
            активом представляет собой интересный эксперимент проверки системы
            обучения кадров, соответствует насущным потребностям.
          </p>

          <p class="subscription">
            Подпись в конце страницы. Тот же абзац, но курсивом.
          </p>

          <p>
            Обобщение перед втянутым абзацем. Под ним и под втянутыми абзацами
            отступ в междустрочное расстояние и шаг вертикальной сетки:
          </p>
          <p class="indent">
            Втянутый абзац. Дальше рыбатекст, разнообразный и богатый опыт
            консультации с широким активом представляет собой интересный
            эксперимент проверки системы обучения кадров, соответствует насущным
            потребностям.
          </p>
          <p class="indent">
            Следующий втянутый абзац. Рыбатекст, разнообразный и богатый опыт
            консультации с широким активом представляет собой интересный
            эксперимент проверки системы обучения кадров, соответствует насущным
            потребностям.
          </p>

          <p>Простой список:</p>
          <ul>
            <li><p>элемент заканчивается запятой,</p></li>
            <li><p>в самом элементе запятых нет,</p></li>
            <li>
              <p>
                под элементом междустрочное расстояние и шаг вертикальной сетки,
              </p>
            </li>
            <li><p>сам список короткий.</p></li>
          </ul>

          <p>Последовательный список, в будущем планирую свешивать:</p>
          <ol>
            <li><p>1. Под обобщением отступ в междустрочное расстояние;</p></li>
            <li>
              <p>2. Под элементом междустрочное и шаг вертикальной сетки;</p>
            </li>
            <li><p>3. Перед элементом число по порядку;</p></li>
            <li><p>4. Число копируется вместе с текстом;</p></li>
            <li><p>5. После элемента точка с запятой;</p></li>
            <li><p>6. У последнего элемента точка.</p></li>
          </ol>

          <p class="no-hanging">
            Текст
            <a
              class="inline-link"
              href="https://www.artlebedev.ru/kovodstvo/sections/83/"
              ><span class="link">со ссылкой</span>.</a
            >
            К сожалению, если ссылке не хватило места справа, она полностью
            переносится на новую строку. Как-нибудь решу это в будущем. У ссылки
            подчеркиваются буквы и цифры, а знаки выделяются только цветом:
            <a
              class="inline-link"
              href="https://www.youtube.com/watch?v=kUslK9otPJw"
              >«<span class="link">Сказания прошлого III</span>».</a
            >
          </p>

          <p class="interline-below">Виджет с кодом:</p>

          <pre data-type="code" data-code-language="pycon" data-code-indent="8">
          # Сделан абы как, в будущем разгламурю и напишу.
        </pre
          >

          <figure>
            <figcaption>
              Подпись к картинке. Сверху и снизу отступ размером с междустрочное
              расстояние.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <hr class="interline-below" />
        </div>
      </div>

      <div class="row">
        <div class="col-10-md">
          <p class="subscription">Начал писать 21 августа 2019.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph.vue'
import Heading1 from '@/components/Heading1.vue'
import Heading2 from '@/components/Heading2.vue'
import Heading3 from '@/components/Heading3.vue'

export default {
  components: {
    Paragraph,
    Heading1,
    Heading2,
    Heading3,
  },
}
</script>

<style></style>
