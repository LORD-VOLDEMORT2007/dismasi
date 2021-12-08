class Form {
    constructor() {
      this.title = createElement('h2')
      this.title.class("tex")
      this.input = createInput("Name");
      this.input.class("inp")
      this.button = createButton('Play');
      this.button.class("bg")
      this.reset = createButton('reset');
      //this.enter = createButton('enter');
      this.greeting = createElement('h3');
      this.greeting.class("text")
    }
  
    hideForm(){
  this.title.hide()
  this.input.hide();
  this.button.hide();
  this.greeting.hide()
  
    }

    hide(){
      this.reset.hide()
    }

    show(){
      this.reset.show()
    }
    

    display(){
      
      this.title.html("wizarding");
      this.title.position(width/2-50,0);
      
    
      this.reset.position(width -100 ,20);
      
      
      
      this.input.position(width/2-40,height/2-80);
      this.button.position(width/2+30,height/2);
  
      this.button.mousePressed(() =>{

        this.input.hide();
        this.button.hide();

        welcome.play()

        player.name = this.input.value();
        
        playerCount+=1;
        player.name = this.input.value();
  
        player.index = playerCount;
  
        player.update()
        player.updateCount(playerCount);
        
        this.greeting.html("HELLO " + player.name + ",INSTRUCTIONS:--- ONLY 2 PLAYERS IN THIS GAME. THE RULES OF THE GAME ARE AS FOLLOWS :" 
         + "1.USE ARROW KEYS TO MOVE THROUGH THE MAZE , 2. PRESS 'A' IN THE BIGINNING AND THEN NEVER AGAIN PRESS 'A' INSTEAD PRESS 'SPACE BAR' TO CONTINUE SHOOTING " 
         + " , 3.DONOT PRESS REFRESH OR ELSE THE GAME WOULD COLLAPSE , 4.INORDER TO RESTART THE GAME PRESS THE RESET BUTTON IN THE RIGHT TOP CORNER"
         + " , 5.U CAN ONLY SHOOT TOWARDS UR RIGHT HAND SIDE"
         + " , 6.PRESS SPACE AFTER U READ THE RULES, 7.PLS FOLLOW THE RULES SERIOUSLY TO ENJOY THE GAME "
         +" , OBJECTIVE OF THE GAME:-- 1. THE ARENA U WILL BE PLAYING IN WILL BE A MAZE, SO TRY TO KNOW THE MAZE WELL TO TRAP OR ESCAPE FROM UR OPPENENT , 2.AS ITS A WIZARDING GAME U TRY TO CURSE UR OPPONENT AND AS U CAN ONLY SHOOT TOWARDS UR RIGHT AS PER THE INSTRUCTIONS, TRY TO KEEP UR OPPONENT ON UR RIGHT"
         + " , THANK YOU BY - 'LORD VOLDERMORT CREATIONS'")
        this.greeting.position(50,height/4)
      });
      this.reset.mousePressed(() =>{
  
        game.update(0)
        player.updateCount(0)
        var plr = database.ref("players")
        plr.remove();

      })
    }
  }
  