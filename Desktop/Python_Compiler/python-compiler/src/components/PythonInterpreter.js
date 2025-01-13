import React, { useState } from "react";
import { jsPython } from "jspython-interpreter";

const PythonInterpreter = () => {
  const [pythonCode, setPythonCode] = useState(""); // Kullanıcının yazdığı Python kodu
  const [output, setOutput] = useState(""); // Çıktı



  const runPythonCode = async () => {
    try {
      const interpreter = jsPython();
  
      let stdout = []; // Çıktıları toplamak için bir array tanımlıyoruz
      interpreter.assignGlobalContext({
        print: (...args) => {
          stdout.push(args.join(" "),"\n"); // Her çıktıyı array'e ekliyoruz
        },
      });
  
      // Python kodunu çalıştır
      const result = await interpreter.evaluate(pythonCode);
  
      // Eğer Python kodunda bir array döndürülüyorsa, onu işleyebilirsin
      console.log("Python'dan dönen sonuç:", result);
  
      // Toplanan çıktıyı Output kısmına aktar
      setOutput(stdout); // Çıktıları array olarak set ediyoruz
    } catch (error) {
      setOutput([`Error: ${error.message}`]); // Hata durumunda array içinde hata mesajını döndürüyoruz
    }
  };
  
  
  

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Python Interpreter</h1>
      <textarea
        value={pythonCode}
        onChange={(e) => setPythonCode(e.target.value)}
        placeholder="Python kodunuzu buraya yazın..."
        rows={10}
        cols={50}
        style={{ width: "100%", fontSize: "16px", padding: "10px" }}
      />
      <button
        onClick={runPythonCode}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Run
      </button>
      <h2>Output:</h2>
      <pre style={{ background: "#f4f4f4", padding: "10px" }}>{output}</pre>
    </div>
  );
};

export default PythonInterpreter;
