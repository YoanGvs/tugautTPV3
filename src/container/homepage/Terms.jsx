import React, { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Contact from '../../component/Section/Contact'
import Head from '../../component/Section/Head'

const Terms = () => {
    return (
        <Fragment>
            <div className="overflow-hidden">
                <div className="position-relative">
                    <img src="./../images/Bg.png" className="images__wrap-head" alt="" />
                    <div className="wrapper__bg-head"></div>
                    <Navbar />
                    <Head default="" current="Last Update Dec 18, 2022" title={"Terms of Conditions"} />
                </div>

                <section>
                    <div className="container">
                        <div className="mb-5">
                            <h2 className='semi-bold font__size--48 text__48-1024 text__48-md text__48-sm'>General Information</h2>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>Dui sed elementum, ornare etiam mauris purus eu quam. Commodo posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et. Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor ut in. </p>
                        </div>

                        <div className="mb-5">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>1. Terms</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>Dui sed elementum, ornare etiam mauris purus eu quam. Commodo posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et. Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor ut in. </p>
                        </div>

                        <div className="mb-5">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>2. User License</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>Rhoncus auctor et consequat volutpat ipsum. Sagittis integer auctor diam montes, sollicitudin diam. Tristique tortor fermentum, vitae faucibus pellentesque vel pharetra aliquet. Sed nisi, eleifend sit ut bibendum neque. Rhoncus turpis volutpat elit, cursus vulputate. Fusce neque lorem sed pellentesque nisi, tellus lacus, feugiat mauris. Non adipiscing lectus ipsum eu, mi, adipiscing habitant dolor purus. Amet sollicitudin sit pharetra, tortor enim porta ornare. Eu eu vulputate tincidunt tempor vitae quis duis etiam blandit. </p>


                            <ul className='roboto normal font__size--18 text__18-1024 color__gray-1 ps-4'>
                                <li>Accumsan feugiat vestibulum, sollicitudin aliquet aliquam pretium eu habitant lorem. </li>
                                <li>Lorem interdum at est neque commodo amet. </li>
                                <li>Pretium senectus placerat tellus ultrices sit arcu, nec ac. Bibendum morbi sollicitudin</li>
                                <li>orci consequat pellentesque ullamcorper nunc a diam. </li>
                                <li>Fringilla commodo enim nulla vel orci massa ultricies arcu. </li>
                                <li>Vel imperdiet sit egestas tincidunt elit auctor. Habitant sit urna suspendisse placerat elit libero. </li>
                                <li>Diam, vitae, facilisis nisi nec diam velit in orci. Porta risus cras egestas ac eget. </li>
                                <li>Porta leo cursus adipiscing diam scelerisque. Augue tortor vel porttitor sit et semper. </li>
                            </ul>

                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>Venenatis metus facilisi id amet, quis eget tristique. Faucibus eleifend donec nunc sapien sit odio nec. Eget purus nunc, aliquet eget. Nam tincidunt sit pharetra, eu lacus at lorem nulla amet. Semper pellentesque sit aliquam vel quam semper scelerisque. Id condimentum sit ipsum eget cras morbi nunc. Diam est facilisis sit commodo risus eleifend. Sem venenatis amet etiam lacus egestas tincidunt posuere nisi, amet. Platea in volutpat et, a sit cras convallis. Sed eget eget netus egestas. Accumsan diam tempor velit felis magna aenean vehicula leo. </p>
                        </div>


                        <div className="">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>3. Information General</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>Dui sed elementum, ornare etiam mauris purus eu quam. Commodo posuere duis pellentesque vel etiam turpis sed. Fermentum eleifend ut neque, fringilla nisl convallis. Nibh tincidunt diam aliquam, et. Adipiscing consequat amet, at mattis magna amet, urna duis. Ut purus tincidunt viverra faucibus cursus convallis aliquam. Amet mi nibh sed neque, phasellus neque. Eget imperdiet eget ut laoreet cursus enim. Placerat vitae id tempor tempus ullamcorper arcu fermentum viverra. Diam morbi tellus amet eget consequat. Volutpat enim tortor ut in. </p>
                        </div>
                    </div>
                </section>

                <Contact />

                <Footer />
            </div >
        </Fragment>
    )
}

export default Terms