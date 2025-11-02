import React from "react";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account Deletion | TRIP Contract Services'
}

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (<>{children}</>)
}

export default PageLayout;
