"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// import styles from "@/Components/Accordian/Accordian.module.css"
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import "./warrantyAccordian.css"
export default function Example() {
  return (
    <div className="main_Accordian_header">
      <div className="accordian_header_main">
        <p className="accordian_header_main_text">FREQUENTLY ASKED QUESTIONS</p>
      </div>
      <Accordion allowZeroExpanded="true">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is the process for a warranty certificate?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="main_accordian_header_text">
              The owner will have to produce the proof of purchase/warranty
              certificate issued either by the authorized dealer of plywood
              Industries Limited or by the Company.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do I need to upload original invoice while registering for
              warranty?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="main_accordian_header_text">
              The owner will have to produce the proof of purchase/warranty
              certificate issued either by the authorized dealer of plywood
              Industries Limited or by the Company.
            </p>
          </AccordionItemPanel>
        </AccordionItem>


        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How do I apply claim for a warranty?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="main_accordian_header_text">
              The owner will have to produce the proof of purchase/warranty
              certificate issued either by the authorized dealer of plywood
              Industries Limited or by the Company.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>     
        What kind of damages are not considered in warranty?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="main_accordian_header_text">
              The owner will have to produce the proof of purchase/warranty
              certificate issued either by the authorized dealer of plywood
              Industries Limited or by the Company.
            </p>
          </AccordionItemPanel>
        </AccordionItem>



        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>     
       Is Warranty Certificate Mandatory For Claim Handling In Future?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="main_accordian_header_text">
              The owner will have to produce the proof of purchase/warranty
              certificate issued either by the authorized dealer of Greenply
              Industries Limited or by the Company.
            </p>
          </AccordionItemPanel>
        </AccordionItem>






      </Accordion>
    </div>
  );
}