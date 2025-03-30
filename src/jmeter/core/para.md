---
icon: pen-to-square
category:
  - JMeter
tag:
  - Core
  - Parameter
order: 2
sticky: true
---

# JMeter 参数化与动态数据详解  

参数化是性能测试的核心技能，用于模拟真实用户行为，避免重复数据导致的缓存或数据库冲突。以下是 JMeter 中实现参数化与动态数据的三种主要方法及其应用场景。

---

## **一、使用 CSV 文件实现参数化**  
### **1. 核心元件：CSV Data Set Config**  
- **作用**：从 CSV 文件逐行读取数据，分配给不同线程（用户）。  
- **适用场景**：多用户登录、批量订单提交、测试数据多样性需求。  

::: tip

详解请参考[CSV 数据文件配置](../guide/config/csv.md)。

:::

### **2. 配置步骤**  
1. **创建 CSV 文件**：  
   - 文件名：`user_data.csv`  
   - 内容示例：  
     ```csv
     username,password,product_id
     user1,pass123,1001
     user2,pass456,1002
     user3,pass789,1003
     ```
2. **添加 CSV Data Set Config**：  
   
   - 位置：右键线程组 → 添加 → 配置元件 → CSV Data Set Config  
   - 关键参数：  
     - **Filename**：CSV 文件路径（建议使用绝对路径或相对路径 `./data/user_data.csv`）。  
     - **Variable Names**：定义变量名（如 `username,password,product_id`）。  
     - **Delimiter**：分隔符（默认逗号 `,`）。  
     - **Recycle on EOF?**：文件读取完毕后是否循环（True/False）。  
     - **Stop thread on EOF?**：文件读完是否停止线程（通常设为 False）。  
     - **Sharing mode**：  
       - `All threads`：所有线程组共享同一文件指针。  
       - `Current thread group`：仅当前线程组独立使用。  
   
3. **在请求中引用变量**：  
   - 示例（HTTP 请求中的参数化）：  
     ```  
     /login?username=${username}&password=${password}  
     /order?product_id=${product_id}  
     ```

::: warning

- **文件编码**：确保 CSV 文件为 UTF-8 无 BOM 格式，避免中文乱码。  
- **路径问题**：分布式压测时，需在所有 Slave 节点相同路径下放置 CSV 文件。  
- **性能优化**：大文件（如 10 万行）建议拆分为多个小文件，避免内存溢出。  

:::

---

## **二、通过函数助手生成动态数据**  
### **1. 常用函数**  
| **函数名**      | **作用**                     | **示例**                        |
| --------------- | ---------------------------- | ------------------------------- |
| **__Random**    | 生成指定范围的随机整数。     | `${__Random(1,100,product_id)}` |
| **__time**      | 获取当前时间戳（可格式化）。 | `${__time(yyyy-MM-dd,date)}`    |
| **__UUID**      | 生成唯一 UUID。              | `${__UUID}`                     |
| **__threadNum** | 获取当前线程编号。           | `${__threadNum}`                |

### **2. 使用方法**  
1. **打开函数助手**：  
   - 菜单栏 → 工具 → 函数助手对话框。  
2. **生成函数表达式**：  
   - 示例：生成 1~100 的随机数 → 选择 `__Random`，输入最小值 1，最大值 100，变量名 `product_id` → 点击生成，得到 `${__Random(1,100,product_id)}`。  
3. **在请求中引用函数**：  
   - 直接在参数值中输入生成的函数表达式。  

### **3. 典型场景**  
- **随机商品 ID**：`/product?id=${__Random(1,1000,)}`  
- **防缓存时间戳**：`/api/data?t=${__time}`  
- **唯一订单号**：`/create_order?order_id=${__UUID}`  

::: warning

- **函数大小写敏感**：如 `__Random` 不能写成 `__random`。  
- **嵌套函数**：支持嵌套使用，如 `${__Random(1,${max_num},)}`。  
- **性能影响**：函数调用本身消耗资源，需避免在每秒万级请求中频繁使用。  

:::

---

## **三、跨线程组传递数据**  
## 1. 利用属性

#### **变量（Variables）**  

- **作用域**：仅在当前线程组内有效。  
- **定义方式**：  
  - 通过 `用户定义的变量` 元件定义全局变量。  
  - 通过正则表达式提取器（如 `${token}`）动态赋值。  

#### **属性（Properties）**  
- **作用域**：全局有效，跨线程组共享。  
- **定义与读取**：  
  - **设置属性**：使用 `__setProperty` 函数，如 `${__setProperty(global_token,${token},)}`。  
  - **读取属性**：使用 `__P` 或 `__property` 函数，如 `${__P(global_token)}`。  

#### **跨线程组传递数据示例**  
**场景**：线程组1 登录获取 Token，线程组2 使用该 Token 访问需鉴权的 API。  

**步骤**：  
1. **线程组1（登录）**：  
   - 使用正则表达式提取器获取 Token，存入变量 `${token}`。  
   - 通过 `__setProperty` 将 Token 设置为全局属性：  
     ```  
     ${__setProperty(global_token,${token},)}  
     ```
2. **线程组2（业务请求）**：  
   - 通过 `__P` 函数引用全局属性：  
     ```  
     Authorization: Bearer ${__P(global_token)}  
     ```

::: warning

- **属性持久性**：JMeter 重启后属性失效，需通过 `-J` 命令行参数预设属性。  
- **分布式测试**：属性在 Master 节点设置后，不会自动同步到 Slave 节点（需额外处理）。  
- **线程安全**：多线程并发修改同一属性时可能产生竞争，建议用 `__javaScript` 实现原子操作。  

:::

## 2. 文件再接法

详解请参考[Jmeter 跨线程组取参数值的方法](../sundry/get_para_across_thread.md)。

---

## **四、参数化策略对比**  
| **方法**         | **适用场景**                         | **优点**                         | **缺点**                       |
| ---------------- | ------------------------------------ | -------------------------------- | ------------------------------ |
| **CSV 参数化**   | 需要大量真实数据（如用户信息）。     | 数据管理清晰，支持复杂数据结构。 | 文件读写可能成为性能瓶颈。     |
| **函数助手**     | 生成简单动态值（如时间戳、随机数）。 | 无需外部文件，灵活高效。         | 无法处理复杂数据依赖关系。     |
| **属性跨线程组** | 跨线程组共享数据（如 Token）。       | 全局有效，适合多阶段测试。       | 需要手动处理并发和分布式问题。 |

---

## **五、实战示例：多用户登录与鉴权测试**  
1. **CSV 文件准备**：  
   - 文件名 `users.csv`，包含 `username,password`。  
2. **线程组1（登录）**：  
   - CSV Data Set Config 读取 `users.csv`。  
   - HTTP 请求发送登录接口，提取 Token 到变量 `${token}`。  
   - 使用 `${__setProperty(global_token_${username},${token},)}` 将每个用户的 Token 保存为独立属性。  
3. **线程组2（业务操作）**：  
   - 通过 `${__P(global_token_${username})}` 获取对应用户的 Token。  
   - 携带 Token 调用业务接口。  

---

通过灵活组合 CSV 参数化、函数助手和属性传递，可以覆盖从简单到复杂的动态数据需求，构建高仿真的性能测试场景。