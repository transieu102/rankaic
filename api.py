from fastapi import FastAPI
from typing import Dict
from fastapi import FastAPI
from PIL import Image
import io
import os
import json
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import base64
app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
list_query =['mô tả 1','Mô tả 2','Mô tả 3']
last_index=0
last_query=-1
@app.post("/query")
def process_data(data: Dict[str, str]) -> str:
    global last_query
    global last_index
    global list_query
    num = int(data.get('numQuery',0))
    if num != last_query:
        last_index=-1
        last_query=num
    if last_index+1 < len(list_query):
        query=list_query[last_index+1]
        last_index+=1
    else:
        last_index+=1
        query=list_query[-1]
    return {query}