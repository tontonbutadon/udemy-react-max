import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [tabContent, setTabContent] = useState("");

  const handleSelect = (selectedBtn) => {
    //selectedbtn string　⇒ "components", "jsx", "props", "state"
    setTabContent(selectedBtn);
    console.log(tabContent);
  };

  let contentTab = <p>Please selct a topic</p>;
  if (tabContent) {
    contentTab = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>{EXAMPLES[tabContent].code}</pre>
        <code></code>
      </div>
    );
  }

  console.log("App Component Executing");
  return (
    <div>
      <Header />
      <main>
        <h2>CORE CONCEPTS</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => {
              <CoreConcept key={conceptItem} {...conceptItem} />;
            })}
            {/*
            <CoreConcept
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
            */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onSelect={() => handleSelect("state")}
            >
              States
            </TabButton>
          </menu>
          {contentTab}
        </section>
      </main>
    </div>
  );
}

export default App;
