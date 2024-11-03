// src/components/Text.jsx
import React from 'react';
import '../css/Text.css';

const Text = () => {
  return (
    
  <div className="main-box">
    <div className="textbobo">
   <h1 style={{ textAlign: 'left' }}>문자 메시지</h1>
   </div>
    <div className="main-text">
      <div className="text-box">
        <label>메세지</label>
        <div className="message-section">
        
          <textarea id="message" placeholder="안녕하세요~" />

       
          <div className='button-section'>
            <button id="mkimg">이미지 생성</button>
            <button id="send">발송하기</button>
            <hr/>
          </div>
        </div>
      
        <div className="img-section">
        <label name =" thema" id="thema" for="message">테마</label>
          <div className="button-section2">
            <input type="hidden" name="themaFlag" id="themaFlag" value="{{ themaFlag }}"/>
                
                <button type="submit" name="cartoon" class="btn btn-primary">만화풍</button>
                <button type="submit" name="thema1" class="btn btn-primary">thema1</button>
                <button type="submit" name="thema2" class="btn btn-primary">thema2</button>
                <br />
          </div>
          <label for="message">이미지 생성 요구사항</label>
          <input type="text" class="form-control" id="promptAdd" name="promptAdd" value="{{ promptAdd }}"/>
          
          <label>이미지 생성</label>
          <textarea id="message" placeholder="안녕하세요~" />
          <button type="submit" name="thema1" class="btn btn-primary">이미지 재생성</button>
        </div>
      </div>
    
      <div className="text-box2">
        <div className="address-section">
          <label>발신 번호</label>
          <input id="num" placeholder="000-0000-0000" />
          <label>주소록</label>
          <textarea id="address-book" placeholder="주소록 창" />
          <div className="add-value">
            <input id="value" placeholder="Value" />
            <button id="add">추가</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    
  );
};

export default Text;
