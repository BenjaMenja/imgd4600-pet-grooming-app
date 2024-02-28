import Dog from "./pages/practice/Dog";
import GoldenRetrieverTeeth from "./images/dogs/golden-retriever-teeth.png";
import GoldenRetrieverTeeth2 from "./images/dogs/golden-retriever-teeth-2.png";
import GoldenRetrieverTeeth3 from "./images/dogs/golden-retriever-teeth-3.png";
import GoldenRetrieverTeeth4 from "./images/dogs/golden-retriever-teeth-4.png";
import GoldenRetrieverTeeth5 from "./images/dogs/golden-retriever-teeth-5.png";
import GoldenRetrieverNails from "./images/dogs/golden-retriever-nails.jpg";
import GoldenRetrieverNails2 from "./images/dogs/golden-retriever-nails-2.jpg";
import GoldenRetrieverNails3 from "./images/dogs/golden-retriever-nails-3.jpg";
import GoldenRetrieverLongHair from "./images/dogs/golden-retriever-long-hair.png";
import GoldenRetrieverLongHair2 from "./images/dogs/golden-retriever-long-hair-2.jpg";
import GoldenRetrieverLongHair3 from "./images/dogs/golden-retriever-long-hair-3.jpg";
import GoldenRetrieverLongHair4 from "./images/dogs/golden-retriever-long-hair-4.jpg";
import ShihTzuLongHair from "./images/dogs/shih-tzu-long-hair.png";
import ShihTzuLongHair2 from "./images/dogs/shih-tzu-long-hair-2.png";
import ShihTzuLongHair3 from "./images/dogs/shih-tzu-long-hair-3.jpg";
import ShihTzuLongHair4 from "./images/dogs/shih-tzu-long-hair-4.png";
import ShihTzuLongHair5 from "./images/dogs/shih-tzu-long-hair-5.png";
import ShihTzuTeeth from "./images/dogs/shih-tzu-teeth.webp";
import ShihTzuTeeth2 from "./images/dogs/shih-tzu-teeth-2.jpg";
import ShihTzuTeeth3 from "./images/dogs/shih-tzu-teeth-3.webp";
import ShihTzuTeeth4 from "./images/dogs/shih-tzu-teeth-4.jpg";
import ShihTzuNails from "./images/dogs/shih-tzu-nails.jpg";
import ShihTzuNails2 from "./images/dogs/shih-tzu-nails-2.jpg";
import ShihTzuNails3 from "./images/dogs/shih-tzu-nails-3.jpg";
import DobermannNails from "./images/dogs/dobermann-nails.jpg";
import DobermannNails2 from "./images/dogs/dobermann-nails-2.jpg";
import DobermannNails3 from "./images/dogs/dobermann-nails-3.jpg";
import DobermannTeeth from "./images/dogs/dobermann-teeth.jpg";
import DobermannTeeth2 from "./images/dogs/dobermann-teeth-2.jpg";
import DobermannTeeth3 from "./images/dogs/dobermann-teeth-3.jpg";
import DobermannTeeth4 from "./images/dogs/dobermann-teeth-4.jpg";
import DobermannLongHair from "./images/dogs/dobermann-long-hair.jpg";
import DobermannLongHair2 from "./images/dogs/dobermann-long-hair-2.jpg";
import DobermannLongHair3 from "./images/dogs/dobermann-long-hair-3.jpg";

const Dogs = [
    <Dog image={GoldenRetrieverTeeth} requiredTool={"brush"} breed={"golden_retriever"}/>,
    <Dog image={GoldenRetrieverTeeth2} requiredTool={"brush"} breed={"golden_retriever"}/>,
    <Dog image={GoldenRetrieverTeeth3} requiredTool={"brush"} breed={"golden_retriever"}/>,
    <Dog image={GoldenRetrieverTeeth4} requiredTool={"brush"} breed={"golden_retriever"}/>,
    <Dog image={GoldenRetrieverTeeth5} requiredTool={"brush"} breed={"golden_retriever"}/>,
    <Dog image={GoldenRetrieverNails} requiredTool={"clip"} breed={"golden_retriever"} />,
    <Dog image={GoldenRetrieverNails2} requiredTool={"clip"} breed={"golden_retriever"} />,
    <Dog image={GoldenRetrieverNails3} requiredTool={"clip"} breed={"golden_retriever"} />,
    <Dog image={GoldenRetrieverLongHair} requiredTool={"wash"} breed={"golden_retriever"} />,
    <Dog image={GoldenRetrieverLongHair2} requiredTool={"wash"} breed={"golden_retriever"} />,
    <Dog image={GoldenRetrieverLongHair3} requiredTool={"wash"} breed={"golden_retriever"} />,
    <Dog image={GoldenRetrieverLongHair4} requiredTool={"wash"} breed={"golden_retriever"} />,
    <Dog image={ShihTzuTeeth} requiredTool={"brush"} breed={"shih_tzu"} />,
    <Dog image={ShihTzuTeeth2} requiredTool={"brush"} breed={"shih_tzu"} />,
    <Dog image={ShihTzuTeeth3} requiredTool={"brush"} breed={"shih_tzu"} />,
    <Dog image={ShihTzuTeeth4} requiredTool={"brush"} breed={"shih_tzu"} />,
    <Dog image={ShihTzuLongHair} requiredTool={"wash"} breed={"shih_tzu"}/>,
    <Dog image={ShihTzuLongHair2} requiredTool={"wash"} breed={"shih_tzu"}/>,
    <Dog image={ShihTzuLongHair3} requiredTool={"wash"} breed={"shih_tzu"}/>,
    <Dog image={ShihTzuLongHair4} requiredTool={"wash"} breed={"shih_tzu"}/>,
    <Dog image={ShihTzuLongHair5} requiredTool={"wash"} breed={"shih_tzu"}/>,
    <Dog image={ShihTzuNails} requiredTool={"clip"} breed={"shih_tzu"}/>,
    <Dog image={ShihTzuNails2} requiredTool={"clip"} breed={"shih_tzu"}/>,
    <Dog image={ShihTzuNails3} requiredTool={"clip"} breed={"shih_tzu"}/>,
    <Dog image={DobermannNails} requiredTool={"clip"} breed={"dobermann"}/>,
    <Dog image={DobermannNails2} requiredTool={"clip"} breed={"dobermann"}/>,
    <Dog image={DobermannNails3} requiredTool={"clip"} breed={"dobermann"}/>,
    <Dog image={DobermannTeeth} requiredTool={"brush"} breed={"dobermann"}/>,
    <Dog image={DobermannTeeth2} requiredTool={"brush"} breed={"dobermann"}/>,
    <Dog image={DobermannTeeth3} requiredTool={"brush"} breed={"dobermann"}/>,
    <Dog image={DobermannTeeth4} requiredTool={"brush"} breed={"dobermann"}/>,
    <Dog image={DobermannLongHair} requiredTool={"wash"} breed={"dobermann"}/>,
    <Dog image={DobermannLongHair2} requiredTool={"wash"} breed={"dobermann"}/>,
    <Dog image={DobermannLongHair3} requiredTool={"wash"} breed={"dobermann"}/>,
]

export default Dogs

