import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

const colStyle = () => ({
  height: 50,
  backgroundColor: "red",
  opacity: Math.round(Math.random() * 10) / 10,
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <GithubOutlined />
        </p>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </header>
      <Row gutter={16}>
        <Col span={12} style={colStyle()} />
        <Col span={12} style={colStyle()} />
      </Row>
      <Row gutter={16}>
        <Col span={8} style={colStyle()} />
        <Col span={8} style={colStyle()} />
        <Col span={8} style={colStyle()} />
      </Row>
      <Row gutter={16}>
        <Col span={6} style={colStyle()} />
        <Col span={6} style={colStyle()} />
        <Col span={6} style={colStyle()} />
        <Col span={6} style={colStyle()} />
      </Row>
    </div>
  );
}

export default App;
