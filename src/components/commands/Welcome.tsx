import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
 __  __            _      ___  _  _   
|  \/  |          (_)    |__ \| || |  
| \  / | __ _ _ __ _  ___   ) | || |_ 
| |\/| |/ _  | __| |/ _ \ / /|__   _|
| |  | | (_| | |  | | (_) / /_   | |  
|_|  |_|\__,_|_|  |_|\___|____|  |_|    
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
,@@%(@@@@                       
  .@@@.@@  @/..  @((((@@                    
@@   @@@@@@@@%  % @(((((@@                  
@ @@@@@@@@@%(((###@(((((((@                 
  @@...   @.@...@##%%%@(((((@                
  @@,@@....@...@@....,(@(((@(@@             
    @/,,.............@%%@@@@#%@&            
      @&,,,,..@@@&&*.,%@..@.,.@&             
      *@&&&&&&&&&*....../....@              
        @@%.@###,,,...@#@@@@                
    @@@    @@@@@.,@@@@((###(@@               
@@@#####@@@%##@@###@#%%%@##@    @@           
@(@#####@,(###....%#@%%%&@@     , @@         
@,@#####@#####@@######%%@.   @&   @         
  @@(%%%%#@######%%%%@@#%%@@@. ../@          
  @@@@@@   @@@#%%%%%@######@@@,             
                    @#######.@&             
                      @(#####@@@             
        @@@%@@@
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome, we introduce data engineers who are likely to evolve.</div>
        <Seperator>----</Seperator>
        <div>
        living for today{" "}
          <Link href="https://dmario24.store">
            Engineer portfolio
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
        ,@@%(@@@@                       
  .@@@.@@  @/..  @((((@@                    
@@   @@@@@@@@%  % @(((((@@                  
@ @@@@@@@@@%(((###@(((((((@                 
  @@...   @.@...@##%%%@(((((@                
  @@,@@....@...@@....,(@(((@(@@             
    @/,,.............@%%@@@@#%@&            
      @&,,,,..@@@&&*.,%@..@.,.@&             
      *@&&&&&&&&&*....../....@              
        @@%.@###,,,...@#@@@@                
    @@@    @@@@@.,@@@@((###(@@               
@@@#####@@@%##@@###@#%%%@##@    @@           
@(@#####@,(###....%#@%%%&@@     , @@         
@,@#####@#####@@######%%@.   @&   @         
  @@(%%%%#@######%%%%@@#%%@@@. ../@          
  @@@@@@   @@@#%%%%%@######@@@,             
                    @#######.@&             
                      @(#####@@@             
                        @@@%@@@
        `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
