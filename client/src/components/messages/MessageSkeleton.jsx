const MessageSkeleton = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="skeleton lg-mobile:w-6 lg-mobile:h-6 w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton lg-mobile:h-3 lg-mobile:w-20 h-4 w-40"></div>
          <div className="skeleton lg-mobile:h-3 lg-mobile:w-20 h-4 w-40"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-1">
          <div className="skeleton lg-mobile:h-3 lg-mobile:w-20  h-4 w-40"></div>
        </div>
        <div className="skeleton lg-mobile:w-6 lg-mobile:h-6 w-10 h-10 rounded-full shrink-0"></div>
      </div>
    </>
  );
};
export default MessageSkeleton;
