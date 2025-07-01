// Bismillahirahmanirahim 
// Elhamdulillahirabbulalemin
// Esselatu ve esselamu alen Nebiyyi Muhammedin ve alen alihi ve sahbihi ecmain
import Mmmnavbar from "./components/mmnav";

import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./components/mmbingeh";



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
<div>

<Mmmnavbar/>

{children}

<Footer/>
</div>
  );
}
