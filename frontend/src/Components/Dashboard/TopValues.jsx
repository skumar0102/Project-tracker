import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BadgeIcon from '@mui/icons-material/Badge';

function TopValues() {
  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: 400 }}>
    <CardOverflow>
      <AspectRatio ratio="1" sx={{ width: 150 }}>
        <BadgeIcon/>
      </AspectRatio>
    </CardOverflow>
    <CardContent>
      <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
        Total Employee
      </Typography>
      <Typography level="body-sm">100</Typography>
    </CardContent>
    <CardOverflow
      variant="soft"
      color="primary"
      sx={{
        px: 0.2,
        writingMode: 'vertical-rl',
        textAlign: 'center',
        fontSize: 'xs',
        fontWeight: 'xl',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        borderLeft: '1px solid',
        borderColor: 'divider',
      }}
    >
      IDS INFOTECH LTD.
    </CardOverflow>
  </Card>
  )
}

export default TopValues