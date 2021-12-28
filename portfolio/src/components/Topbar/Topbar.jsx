import React from 'react';
import './topbar.scss';
import { useState } from 'react'
import render from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


const options = [
    {
      name: 'Enable backdrop (default)',
      scroll: false,
      backdrop: true,
    },
    {
      name: 'Disable backdrop',
      scroll: false,
      backdrop: false,
    },
    {
      name: 'Enable body scrolling',
      scroll: true,
      backdrop: false,
    },
    {
      name: 'Enable both scrolling & backdrop',
      scroll: true,
      backdrop: true,
    },
  ];


export default function Topbar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    function OffCanvasExample({ name, ...props }) {
      
        return (
          <>
            <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
      };


    
    return(
        
        <div class="topbar">
            <div class="bx--grid bx--grid--narrow">
                <div class="bx--row">
                        <div class="bx--col left">

                            <Button onClick={toggleShow}>Work In Progress</Button>  
                   
                        </div>
                        
                        <div class="bx--col right "><Button><Link class="about" to="/Portfolio-Ilham">About</Link></Button></div>
 
                </div>
            </div>
        </div>

        
        
        
    )

    function Example() {
        return (
          <>
            {options.map((props, idx) => (
              <OffCanvasExample key={idx} {...props} />
            ))}
          </>
        );
      }
      
      render(<Example />);



    
};


