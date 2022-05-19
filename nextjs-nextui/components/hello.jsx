import { useTheme, Text, Button } from '@nextui-org/react';

const MyComponent = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Text
        css={{
          color: '$blue800',
          fontSize: '$tiny',
          padding: '$2 $4'
        }}
      >
        Using tokens
      </Text>
      <p
        style={{
          color: theme.colors.primaryLightActive.value,
          fontSize: theme.fontSizes.tiny.value,
          padding: `${theme.space[2].value} ${theme.space[4].value}`
        }}
      >
        Using color theme value
      </p>
        <div>
        <Button color="primary" auto>
          Primary
        </Button>
        </div>
    </div>
  );
};

export default MyComponent;