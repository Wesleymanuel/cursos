import { Avatar, Group, Paper, Text, TypographyStylesProvider } from '@mantine/core';
import classes from './CommentHtml.module.css';

interface commentAtributesProps{
  name : string
  text : string
}

export function CommentHtml({name,text} : commentAtributesProps) {
  return (
    <Paper withBorder radius="md" className={classes.comment}>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text fz="sm">{name}</Text>
          <Text fz="xs" c="dimmed">
            10 minutes ago
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html:
              `<p>${text}</p>`,
          }}
        />
      </TypographyStylesProvider>
    </Paper>
  );
}