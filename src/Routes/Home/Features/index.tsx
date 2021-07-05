import {
  FeaturesContainer,
  FeaturesContent,
  FeaturesTitle,
  FeaturesCardContent,
  FeaturesCard,
  FeaturesIconContainer,
  FeaturesIcon1,
  FeaturesIcon2,
  FeaturesIcon3,
  FeaturesCardTitle,
  FeaturesCardText,
} from "./styles";

const Features: React.FC = () => {
  return (
    <div>
      <FeaturesContent>
        <FeaturesContainer>
          <FeaturesTitle> What we do</FeaturesTitle>
          <FeaturesCardContent>
            <FeaturesCard>
              <FeaturesIconContainer>
                <FeaturesIcon1 className="Icon" />
              </FeaturesIconContainer>
              <FeaturesCardTitle>Save your receipes</FeaturesCardTitle>
              <FeaturesCardText>
                Choose your favorite from our receipes or create your own. Store
                them all in one place.
              </FeaturesCardText>
            </FeaturesCard>
            <FeaturesCard>
              <FeaturesIconContainer>
                <FeaturesIcon2 />
              </FeaturesIconContainer>
              <FeaturesCardTitle>Plan your meals</FeaturesCardTitle>
              <FeaturesCardText>
                Schedule what you’re cooking and when you’re cooking it.
              </FeaturesCardText>
            </FeaturesCard>
            <FeaturesCard>
              <FeaturesIconContainer>
                <FeaturesIcon3 />
              </FeaturesIconContainer>
              <FeaturesCardTitle>Generate grocery list</FeaturesCardTitle>
              <FeaturesCardText>
                Grocery list is created from your receipes.
              </FeaturesCardText>
            </FeaturesCard>
          </FeaturesCardContent>
        </FeaturesContainer>
      </FeaturesContent>
    </div>
  );
};

export default Features;
