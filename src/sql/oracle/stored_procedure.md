---
icon: pen-to-square
category:
  - Oracle
tag:
  - SQL
  - Stored Procedure
order: 66
sticky: true
---

# Oracle 的存储过程

Oracle 的存储过程（Stored Procedure）是数据库中预先编译并存储的一组 SQL 和 PL/SQL 语句，用于完成特定任务。

它类似于其他编程语言中的函数，但可以包含复杂的业务逻辑，并支持输入输出参数。

---

### **1. 存储过程的核心特点**
- **预编译**：存储过程在创建时会被编译并存储在数据库中，后续调用时无需重新解析，执行效率高。
- **模块化**：可将复杂逻辑封装成独立模块，提高代码重用性和可维护性。
- **安全性**：通过权限控制，可限制用户直接操作表，而是通过存储过程间接访问。
- **事务控制**：可以在过程中使用 `COMMIT` 或 `ROLLBACK` 管理事务。
- **支持参数**：支持输入（`IN`）、输出（`OUT`）、输入输出（`IN OUT`）参数。

---

### **2. 存储过程的语法**
#### **基本结构**
```sql
CREATE [OR REPLACE] PROCEDURE procedure_name 
    (parameter1 [IN | OUT | IN OUT] data_type, ...)
IS
    -- 声明变量（可选）
BEGIN
    -- 业务逻辑（PL/SQL 代码）
EXCEPTION
    -- 异常处理（可选）
END procedure_name;
```

#### **关键部分**
- **`CREATE OR REPLACE`**：创建或替换已有存储过程。
- **参数模式**：
  - `IN`：输入参数（默认，只读）。
  - `OUT`：输出参数（可返回结果）。
  - `IN OUT`：输入输出参数（可读可写）。
- **`IS` 或 `AS`**：声明变量和游标。
- **`BEGIN ... END`**：主体逻辑代码块。
- **异常处理**：可捕获和处理运行时错误（如 `NO_DATA_FOUND`）。

---

### **3. 变量的声明与使用**
在 `IS` 或 `AS` 部分声明变量：
```sql
-- 逻辑步骤：
-- 1.声明变量 v_name 和 v_count。
-- 2.从 employees 表中查询 id=100 的 name 字段，将结果存入 v_name。
-- 3.输出拼接后的字符串（例如 Name: John）。

CREATE OR REPLACE PROCEDURE demo_procedure 
IS
    v_name VARCHAR2(50);  -- 声明变量
    v_count NUMBER := 0;   -- 声明并初始化
BEGIN
    SELECT name INTO v_name FROM employees WHERE id = 100;  -- 从 employees 表查询 name 到 v_name
    DBMS_OUTPUT.PUT_LINE('Name: ' || v_name);   -- 输出结果，类似于print（）
END;
```

---

### **4. 流程控制**
存储过程支持 PL/SQL 的流程控制语句：
#### **条件判断**
```sql
IF condition THEN
    -- 逻辑1
ELSIF condition2 THEN
    -- 逻辑2
ELSE
    -- 默认逻辑
END IF;
```

#### **循环**
- **简单循环**：
  ```sql
  LOOP
      -- 代码
      EXIT WHEN condition;
  END LOOP;
  ```
- **FOR 循环**：
  ```sql
  FOR i IN 1..10 LOOP
      -- 代码
  END LOOP;
  ```
- **WHILE 循环**：
  ```sql
  WHILE condition LOOP
      -- 代码
  END LOOP;
  ```

---

### **5. 异常处理**
使用 `EXCEPTION` 块捕获和处理错误：
```sql
CREATE OR REPLACE PROCEDURE safe_procedure 
IS
    v_salary NUMBER;
BEGIN
    SELECT salary INTO v_salary FROM employees WHERE id = 999; -- 假设此ID不存在
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Error: 数据不存在！');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('未知错误: ' || SQLERRM);
END;
```

> 后续补充常见的异常
>

---

### **6. 执行存储过程**
#### **直接调用**
```sql
-- 在 SQL*Plus 或 PL/SQL 块中
BEGIN
    procedure_name(parameters);
END;
```

#### **通过应用程序调用**
例如在 Java 中使用 JDBC：
```java
CallableStatement cs = conn.prepareCall("{call procedure_name(?, ?)}");
cs.setInt(1, 100);  // 设置输入参数
cs.registerOutParameter(2, Types.VARCHAR); // 注册输出参数
cs.execute();
String result = cs.getString(2);
```

---

### **7. 示例**
#### 存储过程
```sql
-- 创建或替换名为 get_employee_name 的存储过程
CREATE OR REPLACE PROCEDURE get_employee_name (
    p_emp_id   IN  NUMBER,      -- 输入参数：员工ID（必填）
    p_emp_name OUT VARCHAR2     -- 输出参数：员工姓名（通过此参数返回结果）
)
IS
-- 此处可声明局部变量（本例中未使用）
BEGIN
    -- 核心逻辑：查询员工姓名并赋值给输出参数
    SELECT name INTO p_emp_name FROM employees WHERE id = p_emp_id;  -- 将 employees 表中 id=p_emp_id 的 name 字段值存入 p_emp_name
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        p_emp_name := '员工不存在';  -- 处理无数据情况
    WHEN TOO_MANY_ROWS THEN
        RAISE_APPLICATION_ERROR(-20001, '找到多条记录'); -- 主动抛出错误
END;
```

#### **调用方式**
```sql
DECLARE
    v_name VARCHAR2(50);  -- 定义变量接收输出参数
BEGIN
    -- 调用存储过程：传入ID=100，返回结果到v_name
    get_employee_name(100, v_name);  
    
    -- 打印结果（需提前启用DBMS_OUTPUT）
    DBMS_OUTPUT.PUT_LINE('Name: ' || v_name); 
END;
```

> - `v_name` 必须与输出参数类型匹配（`VARCHAR2(50)` ≤ `p_emp_name`的长度）。
> - 若要在SQL工具（如SQL*Plus）中显示输出，需先执行 `SET SERVEROUTPUT ON`。
> - 调用方式是匿名PL/SQL块，适用于测试或脚本中。

---

### **8. 存储过程的优点与缺点**
#### **优点**
- 减少网络流量（客户端只需传递参数，无需发送多条 SQL）。
- 提高性能（预编译、减少解析时间）。
- 代码重用和维护方便。

#### **缺点**
- 调试复杂（需要依赖 PL/SQL 调试工具）。
- 数据库依赖性强，迁移到其他数据库可能需要修改逻辑。

---

### **9. 注意事项**
- 权限：用户需要 `CREATE PROCEDURE` 权限。
- 依赖关系：如果存储过程依赖的表或视图被修改，可能需要重新编译。
- 命名规范：建议使用有意义的名称（如 `proc_` 前缀）。

---

### **10. 总结**
Oracle 存储过程是处理复杂业务逻辑、提高数据库性能的重要工具，适合以下场景：
- 高频执行的复杂操作（如批量数据处理）。
- 需要事务控制的任务（如银行转账）。
- 需要封装敏感数据操作（通过权限隔离）。

如果需要更动态的逻辑，可以考虑使用函数或程序包（Package）。