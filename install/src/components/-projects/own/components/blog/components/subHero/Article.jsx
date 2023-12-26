import React, { useState } from 'react'
import MdiFacebook from './MdiFacebook'
import MdiInstagram from './MdiInstagram'
import MdiLinkedin from './MdiLinkedin'
import RiTwitterXFill from './RiTwitterXFill'
import sal from '../assets/meal-2834549_1920.jpg'
import straw from '../assets/strawberry-dessert-2191973_1920.jpg'
import food from '../assets/food-1898194_1920.jpg'
import med from '../assets/mediterranean-cuisine-2378758_1920.jpg'


export default function Article(){
    const [fill,setFill] = useState({
        facebook:'currentColor',
        instagram:'currentColor',
        linkedin:'currentColor'
    })
  return (
    <section className='text-black gap-6 relative flex text-xl mt-[750px]'>
       <div className='h-[max-content] pt-40 justify-center flex-col hidden lg:flex gap-5 basis-1/4 sticky top-32 items-center '>
        <MdiFacebook onMouseLeave={()=>{setFill('currentColor')}} fill={fill.facebook} onMouseOver={()=>{setFill({
            ...fill,
            facebook:'#1877F2'
        })}}  className="hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer "/>
        <MdiInstagram onMouseLeave={()=>{setFill('currentColor')}} fill={fill.instagram} onMouseOver={()=>{setFill({
            ...fill,
            instagram:'#ee2a7b'
        })}} className="hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer "/>
        <RiTwitterXFill  className="hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer "/>
        <MdiLinkedin onMouseLeave={()=>{setFill('currentColor')}} fill={fill.linkedin} onMouseOver={()=>{setFill({
            ...fill,
            linkedin:'#0077b5'
        })}} className="hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer "/>
       </div>
       <div className='lg:basis-2/4 mx-auto w-[80%]'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis impedit repellat labore itaque atque, soluta id enim! Sapiente numquam odio neque, vero nesciunt ipsum quos nobis odit est autem sit?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ipsam quasi iste, autem pariatur sunt, illum quam incidunt fugiat illo aperiam. Qui dolore eius nostrum a obcaecati architecto necessitatibus veniam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rerum eaque expedita, sed dolores quia distinctio non? Impedit inventore explicabo, vitae excepturi architecto facere voluptatum nobis quia magni non deleniti.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eaque ex vel numquam hic aliquid dicta maxime aperiam dolorem velit itaque, beatae praesentium, tempore perferendis qui. Illum ducimus esse a.
        <img src={sal} className='rounded-xl mt-4' />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quo id consequatur nulla ut assumenda, debitis autem sint unde alias, deserunt harum error similique consectetur suscipit architecto inventore molestias officiis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi inventore eligendi doloribus nam itaque odio modi hic id voluptates. Ab hic iste molestias consequuntur mollitia eum atque excepturi tempora.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolores beatae aspernatur inventore suscipit deleniti consequuntur, unde similique corrupti praesentium alias odio autem in recusandae, repudiandae commodi cum? Qui, iure!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corporis perspiciatis quidem, hic quo odit neque provident aut reiciendis laudantium deleniti repellendus sunt, mollitia doloribus expedita eius quae, nostrum blanditiis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eveniet quod deserunt provident architecto consequatur neque sit ullam dicta, vitae numquam sunt deleniti repellendus ex quae dolores exercitationem quis nulla.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia labore quod vitae libero, ipsam sapiente placeat doloremque obcaecati, voluptatem esse voluptate facilis aut repudiandae, aliquam illo. Aspernatur, nesciunt a!
        <img src={food} className='rounded-xl mt-4' />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum tempora iste sed eius fuga ad, quae ex nulla, ducimus esse suscipit sequi ea consequatur ratione fugiat enim, nostrum saepe voluptate!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, labore tenetur reprehenderit ipsam optio eum cumque similique illum earum incidunt, ad fuga consectetur totam perspiciatis voluptate ducimus error deleniti aut.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet officia provident, itaque harum optio repudiandae eius libero adipisci nobis. Qui, eum minus alias eos ex iusto. Tempore facere repellendus optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora esse a minima pariatur iste! Error fugit laboriosam labore laborum quae veniam pariatur, assumenda minus at debitis accusantium totam quaerat.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore doloremque aspernatur, magnam illum odio repellendus nihil dicta, debitis aliquam ab iure similique impedit at possimus nemo exercitationem maiores. Quod?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium rem eligendi, ipsa eveniet nisi odio quaerat voluptatem nemo officiis sit vel cumque iure quas enim in? Voluptatem, dolor adipisci.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi, eos eligendi officia eaque aliquid architecto ea eum assumenda cumque ipsam possimus dolorem et ipsum quae fuga quaerat quo sint.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis debitis numquam recusandae nam excepturi, sint harum molestias ut, laboriosam vero nobis veritatis quae tempora quas quaerat ipsam vitae? Officia, esse!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vero reiciendis, minima ipsum omnis obcaecati pariatur, nemo nihil id veniam itaque explicabo totam quibusdam odit ab, eos fuga iusto. Omnis.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab, tenetur eos nobis sed ex odit obcaecati voluptate laborum. Illo sequi eaque eos sunt autem quam, ex consectetur iste quae.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis ratione, quidem nostrum nihil, animi ut quia, velit dignissimos consequatur sequi officia error illo aut cum enim beatae. Aperiam, ratione!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum, voluptate rerum quo quos fugiat ipsam. Perferendis architecto ducimus nobis molestias fugiat dolorum nisi ad qui ratione necessitatibus, deserunt laborum.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima voluptatem mollitia omnis expedita, nobis dolorum nihil harum ea rem maiores assumenda facilis, sed iusto repellendus autem quis necessitatibus! Illum!
<img src={straw} className='rounded-xl mt-4' />
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quos iure ipsam, laboriosam perspiciatis unde, totam aut, illum est impedit molestias suscipit reprehenderit natus dolorem magni modi itaque quibusdam libero!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita explicabo unde aut! Consequatur ad ipsam magnam alias dolorem nulla accusamus, aliquid quos, vel illo suscipit! Sunt facere accusantium id adipisci.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil accusantium obcaecati officia repudiandae eligendi iste beatae delectus, porro enim sed quo cumque dolorum! Aspernatur, odio porro aperiam incidunt repudiandae impedit.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolore libero ea earum obcaecati eaque at, natus nesciunt tenetur beatae, quibusdam ipsa sint officiis molestiae rerum quos nostrum? Laboriosam, eligendi!
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam iste consequuntur nostrum porro dolor obcaecati soluta qui aliquam est iusto numquam, sed cupiditate magni, laboriosam tempore! Repellendus ex quisquam dicta?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quasi expedita cum! Vel sequi tempore quas nam exercitationem, impedit iusto at dicta eaque corporis adipisci magnam necessitatibus eum accusantium quis!
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, adipisci. Dolor quasi, doloribus fugit consequatur repudiandae nobis iure alias facilis architecto ea esse similique quam, porro autem sunt sit deleniti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quae mollitia quis commodi eius quidem repellat blanditiis vel facilis odio ex, nulla eum dignissimos est voluptate quas iusto nihil ab!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti porro tempore, inventore obcaecati dicta numquam corporis debitis quae eius voluptates tenetur praesentium minima reprehenderit id dignissimos labore pariatur dolores.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quos facilis cum voluptate nobis reprehenderit, recusandae necessitatibus, a maiores aperiam nesciunt ipsum ipsam nihil non laudantium tempore, ducimus fugit suscipit.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil officiis, in labore numquam maiores sed ipsam. Ab eos incidunt minima fuga. In quae quia eos amet delectus explicabo provident deserunt.
<img src={med} className='rounded-xl mt-4' />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquam impedit voluptatem quod laborum, suscipit eveniet illo minus officiis incidunt unde fugiat nobis tenetur quasi laudantium dolores laboriosam nulla dolorem?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo veniam deserunt, quod distinctio doloribus ea. Dolorum ex facere accusamus nemo laudantium cumque, corporis natus consectetur totam nulla, deleniti laborum.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit porro expedita aut quam ratione? Quos obcaecati neque facere est. Non ratione pariatur vero vel saepe inventore architecto sit totam consequuntur.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio eaque, nulla non, reprehenderit, nihil odit qui iure totam vel aut laborum hic quasi sapiente natus ullam? Vel, mollitia expedita.

       </div>
       <div className='h-[max-content] hidden lg:block basis-1/4 sticky top-32 '>
        <h1 className='text-2xl text-center p-10'>Comments</h1>
        <div className='flex flex-col gap-5'>
            <input placeholder='Name' className='border border-slate-800 rounded-lg py-2 w-[80%] px-4 mx-auto' type="text" />
            <input placeholder='Email' className='border border-slate-800 rounded-lg py-2 w-[80%] px-4 mx-auto' type="email" />
            <textarea placeholder='Your Comment' className='border border-slate-800 rounded-lg py-2 w-[80%] px-4 mx-auto' type="text" />
            <button className='px-4 py-3 rounded-lg bg-red-700 w-[40%] mx-auto text-slate-50 hover:bg-gradient-to-r from-red-700 to-orange-500 transition-all duration-200 hover:scale-105 active:scale-95'>Submit</button>
        </div>
       </div>

    </section>
  )
}

