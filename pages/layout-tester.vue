<template>
  <div>
    <!-- Configure font-size and line-height -->
    <Spread>
      <Page>
        <Paragraph
          inner="Configure font-size and line-height for each element here."
          no-indent="true"
        />
      </Page>
      <Page>
        <Heading1
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <Heading2
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus."
        />
        <Heading3
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra."
        />
        <Paragraph
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor. Phasellus tempus tempor sem interdum facilisis. Maecenas auctor nulla ut sapien mollis, ac tempor velit vulputate. Nunc arcu nisl, accumsan eget erat eget, posuere congue augue. Maecenas consectetur pulvinar luctus. Ut sed orci turpis. Fusce maximus porttitor ante. Quisque vel placerat elit, sed efficitur sem. Curabitur venenatis tincidunt porttitor."
          no-indent="true"
        />
      </Page>
    </Spread>

    <!-- Configure wrappers -->
    <Spread>
      <Page>
        <Paragraph
          inner="Configure top and bottom margin for each element here."
          no-indent="true"
        />
      </Page>
      <Page id="configure-wrappers">
        <div class="h1-outer-wrapper">
          <Heading1 inner="Heading one" />
        </div>
        <div class="h2-outer-wrapper">
          <Heading2 inner="Heading two" />
        </div>
        <div class="h3-outer-wrapper">
          <Heading3 inner="Heading three" />
        </div>
        <div class="p-outer-wrapper">
          <Paragraph
            inner="Lorem ipsum dolor sit amet, dolor aliquid definiebas per ne, vix animal prompta indoctum te."
            no-indent="true"
          />
        </div>
      </Page>
    </Spread>

    <!-- Configure paragraph margin-bottom -->
    <Spread>
      <Page>
        <Paragraph
          no-indent="true"
          inner="Configure paragraph margin-bottom."
        />
      </Page>

      <Page>
        <Paragraph
          leadin-size="2"
          no-indent="true"
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor. Phasellus tempus tempor sem interdum facilisis. Maecenas auctor nulla ut sapien mollis, ac tempor velit vulputate. Nunc arcu nisl, accumsan eget erat eget, posuere congue augue. Maecenas consectetur pulvinar luctus. Ut sed orci turpis. Fusce maximus porttitor ante. Quisque vel placerat elit, sed efficitur sem. Curabitur venenatis tincidunt porttitor."
        />
        <Paragraph
          inner="Duis accumsan semper massa, et vulputate arcu efficitur a. Praesent rhoncus risus sit amet porta tristique. Ut ac turpis ac erat convallis aliquet blandit quis odio. Vestibulum quis gravida quam, id facilisis mauris. Vivamus fringilla, ligula a ullamcorper ullamcorper, purus dui aliquet sem, sed tincidunt purus erat commodo ligula. Praesent eget ante auctor, suscipit erat vel, ultrices est. Nulla interdum iaculis ultricies. Quisque elementum lectus ac tincidunt rhoncus. Fusce finibus lacus eu tortor condimentum molestie. In hac habitasse platea dictumst."
        />
        <Paragraph
          inner="Suspendisse vel urna vitae massa elementum molestie vel et lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis porta massa, sed posuere lectus. Mauris et urna ante. Vivamus tristique ac dolor et feugiat. Pellentesque finibus tortor in urna interdum, quis lacinia lorem faucibus. Suspendisse imperdiet molestie metus, eu maximus augue mattis nec. Nulla ex sem, eleifend ac sapien eget, pulvinar iaculis enim. Vivamus non venenatis augue. Curabitur placerat risus at purus tempor iaculis. Nullam tincidunt volutpat pellentesque."
        />
      </Page>
    </Spread>

    <!-- Configure heading one margin-bottom -->
    <Spread>
      <Page>
        <Heading1 inner="Configure heading one margin-bottom" />
        <Paragraph
          no-indent="true"
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor."
        />
      </Page>

      <Page>
        <Paragraph
          no-indent="true"
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor. Phasellus tempus tempor sem interdum facilisis. Maecenas auctor nulla ut sapien mollis, ac tempor velit vulputate. Nunc arcu nisl, accumsan eget erat eget, posuere congue augue. Maecenas consectetur pulvinar luctus. Ut sed orci turpis. Fusce maximus porttitor ante. Quisque vel placerat elit, sed efficitur sem. Curabitur venenatis tincidunt porttitor."
        />
      </Page>
    </Spread>

    <!-- Configure heading two margin-bottom -->
    <Spread>
      <Page>
        <Heading2 inner="Configure heading two margin-bottom" />
        <Paragraph
          no-indent="true"
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor."
        />
      </Page>

      <Page>
        <Paragraph
          no-indent="true"
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor. Phasellus tempus tempor sem interdum facilisis. Maecenas auctor nulla ut sapien mollis, ac tempor velit vulputate. Nunc arcu nisl, accumsan eget erat eget, posuere congue augue. Maecenas consectetur pulvinar luctus. Ut sed orci turpis. Fusce maximus porttitor ante. Quisque vel placerat elit, sed efficitur sem. Curabitur venenatis tincidunt porttitor."
        />
      </Page>
    </Spread>

    <!-- Configure heading one margin-bottom -->
    <Spread>
      <Page>
        <Heading3 inner="Configure heading three margin-bottom" />
        <Paragraph
          no-indent="true"
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor."
        />
      </Page>

      <Page>
        <Paragraph
          no-indent="true"
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor. Phasellus tempus tempor sem interdum facilisis. Maecenas auctor nulla ut sapien mollis, ac tempor velit vulputate. Nunc arcu nisl, accumsan eget erat eget, posuere congue augue. Maecenas consectetur pulvinar luctus. Ut sed orci turpis. Fusce maximus porttitor ante. Quisque vel placerat elit, sed efficitur sem. Curabitur venenatis tincidunt porttitor."
        />
      </Page>
    </Spread>

    <!-- Configure heading one margin-bottom -->
    <Spread>
      <Page>
        <Paragraph no-indent="true" inner="Configure one line spacer" />
        <Spacer size="one-line" />
        <Paragraph no-indent="true" inner="Configure two lines spacer" />
        <Spacer size="two-lines" />
        <Paragraph no-indent="true" inner="Configure three lines spacer" />
        <Spacer size="three-lines" />
        <Paragraph no-indent="true" inner="Configure interline spacer" />
        <Spacer size="interline" />
        <Paragraph no-indent="true" inner="Lorem ipsum dolor sit amet" />
      </Page>
      <Page>
        <Paragraph
          no-indent="true"
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor. Phasellus tempus tempor sem interdum facilisis. Maecenas auctor nulla ut sapien mollis, ac tempor velit vulputate. Nunc arcu nisl, accumsan eget erat eget, posuere congue augue. Maecenas consectetur pulvinar luctus. Ut sed orci turpis. Fusce maximus porttitor ante. Quisque vel placerat elit, sed efficitur sem. Curabitur venenatis tincidunt porttitor. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Maecenas auctor nulla ut sapien mollis, ac tempor velit vulputate. Nunc arcu nisl, accumsan eget erat eget, posuere congue augue. Maecenas consectetur pulvinar luctus. Ut sed orci turpis. Fusce maximus porttitor ante. Quisque vel placerat elit, sed efficitur sem. Curabitur venenatis tincidunt porttitor. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus."
        />
      </Page>
    </Spread>

    <!-- Configure page paddings -->
    <Spread id="configure-page-paddings">
      <Page>
        <Paragraph
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor."
          no-indent="true"
          leadin-size="2"
        />
        <Paragraph
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor. Phasellus tempus tempor sem interdum facilisis. Maecenas auctor nulla ut sapien mollis, ac tempor velit vulputate. Nunc arcu nisl, accumsan eget erat eget, posuere congue augue. Maecenas consectetur pulvinar luctus. Ut sed orci turpis. Fusce maximus porttitor ante. Quisque vel placerat elit, sed efficitur sem. Curabitur venenatis tincidunt porttitor."
        />
      </Page>
      <Page>
        <Paragraph
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor. Phasellus tempus tempor sem interdum facilisis. Maecenas auctor nulla ut sapien mollis, ac tempor velit vulputate. Nunc arcu nisl, accumsan eget erat eget, posuere congue augue. Maecenas consectetur pulvinar luctus. Ut sed orci turpis. Fusce maximus porttitor ante. Quisque vel placerat elit, sed efficitur sem. Curabitur venenatis tincidunt porttitor."
        />
        <Paragraph
          inner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mattis lectus. Aliquam tempor ligula eget euismod viverra. Donec tempus libero congue nibh pharetra lobortis. Ut malesuada mauris nibh, et finibus nisl iaculis ac. Integer vulputate leo id est congue varius at vitae odio. Vivamus varius libero finibus enim varius varius. Morbi id nulla elementum, scelerisque libero non, dapibus lacus. Nam laoreet neque nec mi mattis tempor. Phasellus tempus tempor sem interdum facilisis. Maecenas auctor nulla ut sapien mollis, ac tempor velit vulputate. Nunc arcu nisl, accumsan eget erat eget, posuere congue augue. Maecenas consectetur pulvinar luctus. Ut sed orci turpis. Fusce maximus porttitor ante. Quisque vel placerat elit, sed efficitur sem. Curabitur venenatis tincidunt porttitor."
        />
      </Page>
    </Spread>
  </div>
</template>

<script>
import Page from '@/components/layouting/Page.vue'
import Spread from '@/components/layouting/Spread.vue'
import Heading1 from '@/components/typography/Heading1.vue'
import Heading2 from '@/components/typography/Heading2.vue'
import Heading3 from '@/components/typography/Heading3.vue'
import Paragraph from '@/components/typography/Paragraph.vue'
import Spacer from '@/components/typography/Spacer.vue'

export default {
  components: {
    Page,
    Spread,
    Heading1,
    Heading2,
    Heading3,
    Paragraph,
    Spacer,
  },
}
</script>

<style>
#configure-wrappers [class$='-outer-wrapper'] {
  padding-top: 20px;
  padding-bottom: 20px;
}

#configure-wrappers [class$='-outer-wrapper'] [class$='-wrapper'] {
  margin-bottom: 0;
}

#configure-paragraph p {
  text-indent: 0;
}

#configure-page-paddings {
  background-color: lightgray;
}

#configure-page-paddings .p-wrapper {
  background-color: white;
}
</style>
