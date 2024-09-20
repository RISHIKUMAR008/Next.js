import { NextResponse } from "next/server";

export  function GET(request) {
    return NextResponse.json({name:"Rishi",age:22}) 
    
  }
