
# Uni-app 经验条实现

如果您要在uni-app中实现的是一个经验条，而不是评分组件，那么UI的实现会有所不同。经验条通常是一个进度条，显示用户的当前经验和升级所需的经验。这里是一个简化的例子，展示了如何实现一个基本的经验条。

```html
<template>
  <view class="experience-bar-container">
    <view class="experience-bar">
      <view class="experience-bar-fill" :style="{ width: fillWidth + '%' }"></view>
    </view>
    <view class="experience-levels">
      <!-- 循环生成经验级别 -->
      <view v-for="level in 6" :key="level" class="experience-level">LV{{ level }}</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentExperience: 0, // 当前经验值
      maxExperience: 100, // 升级所需的最大经验值
    };
  },
  computed: {
    fillWidth() {
      return (this.currentExperience / this.maxExperience) * 100;
    }
  }
};
</script>

<style>
.experience-bar-container {
  display: flex;
  flex-direction: column;
}

.experience-bar {
  height: 20px;
  background-color: #eee;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.experience-bar-fill {
  background-color: #ffd700;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.experience-levels {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.experience-level {
  /* 根据您的设计添加样式 */
}
</style>
```

在这个例子中：

- `<experience-bar>` 是一个包含填充元素的容器，用来表示经验条的外观。
- `<experience-bar-fill>` 的宽度是动态计算的，根据当前经验与所需最大经验的比例来确定。
- 我们使用了Vue的计算属性 `fillWidth` 来确定填充元素的宽度，这样就可以实现经验条的增长动画。
- `<experience-levels>` 显示了不同的经验级别，您可以根据设计调整其样式。

您可以根据这个基础示例，调整样式和逻辑以满足您的具体需求。如果您有任何其他要求或需要帮助，请告诉我！


# Uni-app 经验条组件

在uni-app中，您可以将常用的UI部分封装成组件，以便在不同页面或应用中重用。下面是一个封装成组件的示例，这个组件将实现一个经验条。

首先，创建一个新的`.vue`文件，例如命名为`ExperienceBar.vue`，并将以下内容放入该文件：

```vue
<template>
  <view class="experience-bar-container">
    <view class="experience-bar">
      <view class="experience-bar-fill" :style="{ width: fillWidth + '%' }"></view>
    </view>
    <view class="experience-levels">
      <view v-for="level in levels" :key="level" class="experience-level">LV{{ level }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    currentExperience: {
      type: Number,
      default: 0,
    },
    maxExperience: {
      type: Number,
      default: 100,
    },
    levels: {
      type: Array,
      default: () => [1, 2, 3, 4, 5, 6],
    }
  },
  computed: {
    fillWidth() {
      return (this.currentExperience / this.maxExperience) * 100;
    }
  }
};
</script>

<style scoped>
.experience-bar-container {
  display: flex;
  flex-direction: column;
}

.experience-bar {
  height: 20px;
  background-color: #eee;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.experience-bar-fill {
  background-color: #ffd700;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.experience-levels {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.experience-level {
  /* 根据您的设计添加样式 */
}
</style>
```

这个组件使用了`props`来接收`currentExperience`, `maxExperience`, 和`levels`作为参数，这样您就可以在不同的地方使用这个组件，并传入不同的值。

要在页面上使用这个组件，您首先需要在该页面的`.vue`文件中导入并注册它：

```vue
<template>
  <view>
    <experience-bar :current-experience="currentExp" :max-experience="maxExp" :levels="expLevels"></experience-bar>
  </view>
</template>

<script>
import ExperienceBar from "@/components/ExperienceBar.vue";

export default {
  components: {
    ExperienceBar
  },
  data() {
    return {
      currentExp: 50,
      maxExp: 100,
      expLevels: [1, 2, 3, 4, 5, 6]
    };
  }
};
</script>
```

请注意，您可能需要根据您的项目结构调整`ExperienceBar`组件的导入路径。在页面的`<script>`部分，注册`ExperienceBar`组件，并在`data`函数中定义经验条的数据。

使用这种方法，您可以在您的uni-app项目中任何需要显示经验条的地方重用这个组件。
