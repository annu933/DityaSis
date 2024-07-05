import { Box } from "@mui/material";
import Image from 'next/image';

const CustomButton = ({
  children,
  width,
  margin,
  backgroundColor,
  backgroundImage,
  color,
  fontSize,
  padding,
  borderRadius,
  startIcon,
  onClick,
  fontWeight,
  ...props
}) => {
  const renderStartIcon = () => {
    if (typeof startIcon === 'string') {
    
      return <img src={startIcon} alt="Start Icon" style={{ marginRight: '0.5rem', width: '1.5rem', height: 'auto' }} />;
    } else if (typeof startIcon === 'object' && startIcon.src) {
     
      return (
        <Image
          src={startIcon.src}
          alt="Start Icon"
          width={startIcon.width}
          height={startIcon.height}
          style={{objectFit:"contain"}}
        />
      );
    } else if (startIcon instanceof File) {
     
      return <img src={URL.createObjectURL(startIcon)} alt="Start Icon" style={{ marginRight: '0.5rem', width: '1.5rem', height: 'auto' }} />;
    } else {

      return startIcon;
    }
  };

  return (
    <Box
      className="poppins-font"
      sx={{
        width: width,
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        color: color,
        fontSize: fontSize,
        textTransform: 'capitalize',
        padding: padding,
        borderRadius: borderRadius,
        textAlign: 'center',
        fontWeight: fontWeight,
        margin: margin,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClick}
      {...props}
    >
      <Box sx={{ paddingRight: 1 }}>
        {startIcon && renderStartIcon()}
      </Box>
      {children}
    </Box>
  );
};

export default CustomButton;
