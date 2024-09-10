import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

// Import the icons you need
library.add(fas, far, fab);
