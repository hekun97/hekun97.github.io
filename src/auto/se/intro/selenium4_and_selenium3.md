# Selenium 4 和 Selenium 3

以下是 **Selenium 4.0** 与 **Selenium 3.0** 的主要区别，从功能改进、API 变化到生态适配进行对比：

### **一、核心改进**

| **特性**                 | **Selenium 3.0**                           | **Selenium 4.0**                                             |
| ------------------------ | ------------------------------------------ | ------------------------------------------------------------ |
| **相对定位器**           | ❌ 不支持                                   | ✅ 新增 `RelativeLocator`（基于元素位置关系定位，如 `above()`, `below()`, `near()`） |
| **Chrome DevTools 支持** | ❌ 需依赖第三方库（如 `puppeteer`）         | ✅ 原生集成 `ChromeDevTools`，支持网络拦截、性能分析、地理位置模拟等 |
| **多标签页/窗口管理**    | ❌ 需通过 `driver.switchTo().window()` 切换 | ✅ 新增 `newWindow()` 方法，直接指定打开类型（标签页或窗口）  |
| **文档结构**             | ❌ 文档分散且部分过时                       | ✅ 官网文档全面重构，提供更清晰的模块化指南和示例             |

---

### **二、API 变化**
| **变更点**         | **Selenium 3.0**             | **Selenium 4.0**                                             |
| ------------------ | ---------------------------- | ------------------------------------------------------------ |
| **浏览器驱动管理** | ❌ 手动下载并配置驱动路径     | ✅ 内置 `Selenium Manager`（Beta），自动下载匹配的浏览器驱动  |
| **浏览器选项设置** | ❌ 使用 `DesiredCapabilities` | ✅ 改用 `Browser Options` 类（如 `ChromeOptions`）            |
| **等待机制**       | ❌ 显式等待需自定义条件       | ✅ 新增 `ExpectedConditions` 简写方法（如 `element_to_be_clickable`） |
| **日志控制**       | ❌ 日志配置复杂               | ✅ 通过 `LoggingPreferences` 或 `Options` 直接配置            |

---

### **三、生态与兼容性**
| **变更点**         | **Selenium 3.0**                  | **Selenium 4.0**                                          |
| ------------------ | --------------------------------- | --------------------------------------------------------- |
| **W3C 协议支持**   | ❌ 部分命令使用 JSON Wire Protocol | ✅ 默认全面兼容 **W3C WebDriver 标准**，提升跨浏览器一致性 |
| **旧版浏览器支持** | ✅ 支持旧版浏览器（如 IE 11）      | ❌ 移除对过时浏览器的官方支持（如不再默认支持 IE 11）      |
| **Java 版本依赖**  | ✅ 支持 Java 7+                    | ❌ 最低要求 **Java 8+**                                    |
| **Python 兼容性**  | ✅ 兼容 Python 3.5+                | ❌ 最低要求 **Python 3.7+**                                |

---

### **四、新增工具与特性**
#### **1. 增强的截图功能**
- **元素级截图**：直接截取特定元素而非整个页面。
  ```python
  element = driver.find_element(By.ID, "logo")
  element.screenshot("logo.png")
  ```

#### **2. 改进的弹窗处理**
- **原生弹窗拦截**：通过 `ChromiumOptions` 直接禁用弹窗。
  ```java
  ChromeOptions options = new ChromeOptions();
  options.setExperimentalOption("excludeSwitches", Arrays.asList("disable-popup-blocking"));
  ```

#### **3. 性能监控**
- **DevTools 集成**：直接获取页面性能指标。
  ```python
  dev_tools = driver.get_devtools()
  dev_tools.create_session()
  dev_tools.send("Performance.enable")
  metrics = dev_tools.send("Performance.getMetrics")
  ```

---

### **五、升级注意事项**
1. **驱动兼容性**：确保浏览器驱动版本与 Selenium 4.0 兼容（如 ChromeDriver ≥ 95.0.4638.69）。
2. **代码迁移**：
   - 替换 `DesiredCapabilities` 为 `Browser Options`。
   - 检查已弃用方法（如 `find_element_by_*` 改用 `find_element(By.*)`）。
3. **依赖冲突**：升级后检查第三方库（如 `selenium-wire`）是否兼容。

---

### **六、示例对比**
#### **Selenium 3.0 创建驱动**
```java
// 旧版使用 DesiredCapabilities
DesiredCapabilities caps = DesiredCapabilities.chrome();
caps.setCapability("platform", "Windows 10");
WebDriver driver = new ChromeDriver(caps);
```

#### **Selenium 4.0 创建驱动**
```java
// 新版使用 ChromeOptions
ChromeOptions options = new ChromeOptions();
options.setPlatformName("Windows 10");
WebDriver driver = new ChromeDriver(options);
```

---

### **总结**
升级到 **Selenium 4.0** 可显著提升测试稳定性、可维护性，并简化复杂场景（如网络拦截、元素截图）的实现。建议优先评估团队技术栈兼容性后逐步迁移。