$(window).on('xpboot', () => {
  xp.applications.add('paint', () => {
    var el = $.parseHTML(`<window width="800" height="500" title="JS Paint">
      <style>
iframe[seamless]{
  background-color: transparent;
  border: 0px none transparent;
  padding: 0px;
  overflow: hidden;
}
.frame-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
}
  </style>
  
  <div class="frame-container">
    
<iframe height="100%" seamless="seamless" width="100%" src="https://jspaint.app/"></iframe>
  </div> 
    </window>`);
    document.body.appendChild(el[0]);
    $(el).updateWindow();
  });
    xp.startmenu.add('paint', 'Paint', 'data:image/png;base64,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');
});
