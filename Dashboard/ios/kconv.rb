# Stub for kconv which was removed in Ruby 3.4
# This provides minimal compatibility for CFPropertyList

module Kconv
  # Encoding constants
  UTF8 = Encoding::UTF_8
  SJIS = Encoding::Shift_JIS
  EUC = Encoding::EUC_JP
  ASCII = Encoding::ASCII
  BINARY = Encoding::ASCII_8BIT
  NOCONV = 0
  AUTO = nil

  module_function

  def toutf8(str)
    str.encode(Encoding::UTF_8, invalid: :replace, undef: :replace)
  end

  def kconv(str, to_enc, from_enc = nil)
    return str if to_enc == NOCONV
    from_enc ||= AUTO
    
    if from_enc == AUTO
      str.encode(to_enc || Encoding::UTF_8, invalid: :replace, undef: :replace)
    else
      str.encode(to_enc || Encoding::UTF_8, from_enc, invalid: :replace, undef: :replace)
    end
  end

  def toeuc(str)
    str.encode(Encoding::EUC_JP, invalid: :replace, undef: :replace)
  end

  def tosjis(str)
    str.encode(Encoding::Shift_JIS, invalid: :replace, undef: :replace)
  end

  def tojis(str)
    str.encode(Encoding::ISO_2022_JP, invalid: :replace, undef: :replace)
  end

  def tolocale(str)
    str.encode(Encoding.default_external, invalid: :replace, undef: :replace)
  end

  def guess(str)
    str.encoding
  end

  def iseuc(str)
    str.encoding == Encoding::EUC_JP
  end

  def issjis(str)
    str.encoding == Encoding::Shift_JIS
  end

  def isjis(str)
    str.encoding == Encoding::ISO_2022_JP
  end

  def isutf8(str)
    str.encoding == Encoding::UTF_8
  end
end
