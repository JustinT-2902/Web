import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="Introduction">
        <hr className="Green-Line" />
        <div>
          <p className="Heading">Hello There!</p>
          <div className="Sub-Head">
            <span className="Prefix">I'm </span>
            <span className="name">JustinT,</span>
            <p>Sales Executive</p>
            <p>Relationship Manager</p>
          </div>
          <div className="Action-Container">
            <div className="View-Container">
              <div className="View">View My Portfolio</div>
              <div className="Arrow-Container">
                <img
                  src=".\assets\images\Home\Arrow.png"
                  alt=""
                  className="Arrow-Icon"
                />
              </div>
            </div>
            <div className="Hire">Hire me!</div>
          </div>
        </div>
      </div>

      <hr className="Break-Line" />
      <div className="About-Me">
        <div className="About-Me-Image"></div>
        <div className="About-Me-Content">
          <hr className="Yellow-Line" />
          <div className="About">
            <p className="Ab">About Me</p>
            <div>
              <span className="Who-is">Who is </span>
              <span className="JustinT">JustinT?</span>
            </div>
            <div className="Description-Container">
              <img
                src=".\assets\images\Home\Edu-Icon.png"
                alt=""
                className="About-Icon"
              />
              <p className="Description">EDUCATION</p>
            </div>

            <p className="Sub-Description">Foreign Trade University</p>
            <p className="Sub-Description">
              (Bachelor of International Economics)
            </p>

            <div className="Description-Container">
              <img
                src=".\assets\images\Home\Work-Icon.png"
                alt=""
                className="About-Icon"
              />
              <p className="Description">WORKING EXPERIENCES</p>
            </div>
            <p className="Sub-Description">
              Sales Executive at Vantage Logistics Company
            </p>
            <p className="Sub-Description">
              Relationship Manager at DNBC Financial Group (BIN Group
              Coperation)
            </p>
            <div className="ActionT-Container">
              <div className="ViewT-Container">
                <div className="View">More About Me</div>
                <div className="Arrow-Container">
                  <img
                    src=".\assets\images\Home\Arrow.png"
                    alt=""
                    className="Arrow-Icon"
                  />
                </div>
              </div>
              <div className="CV-Container">
                <img
                  src=".\assets\images\Home\Download.png"
                  alt=""
                  className="Download-Icon"
                />
                <p className="CV">My CV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="Break-Line" />

      <div className="Services">
        <div className="Services-Head">
          <div className="Services-Head-Container">
            <div className="Services-Head-Content">
              <hr className="YellowS-Line" />
              <p className="Sv">Services</p>
            </div>
            <p className="Provide">I PROVIDE</p>
          </div>
          <div>
            <div className="ActionS-Container">
              <div className="ViewS-Container">
                <div className="View">View My Services</div>
                <div className="Arrow-Container">
                  <img
                    src=".\assets\images\Home\Arrow.png"
                    alt=""
                    className="Arrow-Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Services-Sub">
          <div className="Services-Sub-Container">
            <img
              src=".\assets\images\Home\Service1.png"
              alt=""
              className="Services-icon"
            />
            <p className="Services-Sub-Content">FULL TIME</p>
            <p className="Services-Sub-Details">Sales</p>
            <p className="Services-Sub-Details">Customer Services</p>
          </div>

          <div className="Services-Sub-Container">
            <img
              src=".\assets\images\Home\Service2.png"
              alt=""
              className="Services-icon"
            />
            <p className="Services-Sub-Content">PART TIME</p>
            <p className="Services-Sub-Details">Website Designer</p>
            <p className="Services-Sub-Details">Teaching</p>
          </div>

          <div className="Services-Sub-Container">
            <img
              src=".\assets\images\Home\Service3.png"
              alt=""
              className="Services-icon"
            />
            <p className="Services-Sub-Content">SELF-EMPLOYED</p>
            <p className="Services-Sub-Details">Mindset Site</p>
            <p className="Services-Sub-Details">Listener</p>
          </div>
        </div>
      </div>

      <div className="Tools">
        <div className="Tools-Head-Container">
          <div className="Tools-Head-Content">
            <hr className="YellowS-Line" />
            <p className="Sv">Tools</p>
          </div>
          <p className="Provide">I CAN USE</p>
        </div>

        <div className="Tool-Sub-Container">
          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Adobe_Premier_Icon.png"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Adobe Premiere</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Adobe_Photoshop_Icon.png"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Adobe Photoshop</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Adobe_Illustrator_Icon.png"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Adobe Illustrator</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Pinterest_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Pinterest</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Figma-Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Figma</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Canva_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Canva</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\CapCut_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Capcut</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Zoho_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Zoho</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Notion_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Notion</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\ChatGPT_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">ChatGPT</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Grok_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Grok AI</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Trello_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Trello</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\GoogleDrive_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Google Drive</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\MsTeams_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">MS Teams</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\VSCode_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">VS Code</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\AppScript_Icon.png"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">Apps Script</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\InVideo_Icon.png"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">InVideo AI</p>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\WordPress_Icon.png"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <p className="Icon-Name">WordPress</p>
          </div>
        </div>
      </div>

      <div className="Projects">
        <div className="Projects-Head">
          <div className="Projects-Head-Container">
            <div className="Projects-Head-Content">
              <hr className="YellowS-Line" />
              <p className="Sv">Projects</p>
            </div>
            <p className="Provide">I HAVE WORKED ON</p>
          </div>
          <div>
            <div className="ActionP-Container">
              <div className="ViewP-Container">
                <div className="View">View My Projects</div>
                <div className="Arrow-Container">
                  <img
                    src=".\assets\images\Home\Arrow.png"
                    alt=""
                    className="Arrow-Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Projects-Sub">
          <div className="Projects-Sub-Container">
            <div className="Projects-Sub-Content">
              <img
                src=".\assets\images\Home\Project1.png"
                alt=""
                className="Project-Image"
              />
            </div>

            <div className="Projects-Sub-Details">
              <div className="Projects-Title">Web Design</div>
              <div className="Projects-Link">
                <p className="Project-Name">MY WEBSITE</p>
                <div className="ArrowP-Container">
                  <img
                    src=".\assets\images\Home\Arrow.png"
                    alt=""
                    className="ArrowP-Icon"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="Projects-Sub-Container">
            <div className="Projects-Sub-Content">
              <img
                src=".\assets\images\Home\AppSripts1.png"
                alt=""
                className="Project-Image"
              />
            </div>

            <div className="Projects-Sub-Details">
              <div className="Projects-Title">Apps Script</div>
              <div className="Projects-Link">
                <p className="Project-Name">EMAIL AUTO SEND</p>
                <div className="ArrowP-Container">
                  <img
                    src=".\assets\images\Home\Arrow.png"
                    alt=""
                    className="ArrowP-Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
