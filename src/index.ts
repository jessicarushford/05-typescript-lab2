import { Greeter } from "./Greeter";
import { JavaScriptGreeter } from "./JavaScriptGreeter";
import { LoudGreeter } from "./LoudGreeter";
import { HtmlGreeter } from "./HtmlGreeter";

const newGreeter: Greeter = new Greeter("Howdy");
const newJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("Howdy");
const newLoudGreeter: LoudGreeter = new LoudGreeter("Howdy");
const newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Howdy");

console.log(newGreeter.greet("Jessica"));
console.log(newJavaScriptGreeter.greet("Jessica"));
console.log(newLoudGreeter.greet("Jessica"));
console.log(newHtmlGreeter.greet("Jessica"));
